import { Observable } from 'rxjs'

import { PLACE_ACTIONS, placeActions } from '../modules/places'
import { reviewActions } from '../modules/reviews'
import { searchRequest } from '../effects/google-places'
import { getPlaceRequest, placeBid } from '../effects/api'

export const searchPlaceEpic = action$ =>
  action$
    .ofType(PLACE_ACTIONS.SEARCH)
    .debounceTime(250)
    .switchMap(action =>
      Observable.fromPromise(
        searchRequest(action.lat, action.long, action.query),
      )
        .map(placeActions.fulfilled)
        .catch(error => Observable.of(placeActions.rejected(error.message))),
    )

export const getPlaceEpic = (action$, state$) =>
  action$.ofType(PLACE_ACTIONS.GET_PLACE).switchMap(action =>
    Observable.fromPromise(
      getPlaceRequest(action.placeId, state$.getState().users),
    )
      .map(reviewActions.fulfilled)
      .catch(error => Observable.of(placeActions.rejected(error.message))),
  )

export const placeBidEpic = (action$, state$) =>
  action$.ofType(PLACE_ACTIONS.PLACE_BID).switchMap(action =>
    Observable.fromPromise(
      placeBid(state$.getState().places, state$.getState().users),
    )
      .map(placeActions.fulfilled)
      .catch(error => Observable.of(placeActions.rejected(error.message))),
  )
