import { Observable } from 'rxjs'

import { PLACE_ACTIONS, placeActions } from '../modules/places'
import { searchRequest } from '../effects/google-places'
import { getPlaceRequest } from '../effects/api'

export const searchPlaceEpic = action$ =>
  action$
    .ofType(PLACE_ACTIONS.SEARCH)
    .debounceTime(300)
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
      .map(placeActions.fulfilled)
      .catch(error => Observable.of(placeActions.rejected(error.message))),
  )
