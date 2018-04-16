import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { PLACE_ACTIONS, placeActions } from '../modules/places'
import { reviewActions } from '../modules/reviews'
import { searchRequest } from '../effects/google-places'
import * as placeApi from '../effects/api/places'

export const search = action$ =>
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

export const getPlace = (action$, store) =>
  action$.ofType(PLACE_ACTIONS.GET_PLACE).switchMap(action =>
    Observable.fromPromise(
      placeApi.show({
        user: store.getState().users,
        place: { id: action.placeId },
      }),
    )
      .map(reviewActions.fulfilled)
      .catch(error => Observable.of(placeActions.rejected(error.message))),
  )

export const bid = (action$, store) =>
  action$.ofType(PLACE_ACTIONS.PLACE_BID).switchMap(action =>
    Observable.fromPromise(
      placeApi.createBid(store.getState().places, store.getState().users),
    )
      .map(placeActions.fulfilled)
      .catch(error => Observable.of(placeActions.rejected(error.message))),
  )

export default combineEpics(search, getPlace, bid)
