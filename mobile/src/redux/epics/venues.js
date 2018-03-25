import { Observable } from 'rxjs'

import { SEARCH_ACTIONS, searchActions } from '../modules/venues'
import { searchRequest, getPlaceRequest } from '../effects/google-places'

export const searchRequestEpic = action$ =>
  action$
    .ofType(SEARCH_ACTIONS.SEARCH)
    .debounceTime(200)
    .switchMap(action =>
      Observable.fromPromise(
        searchRequest(action.lat, action.long, action.query),
      )
        .map(searchActions.fulfilled)
        .catch(error => Observable.of(searchActions.rejected(error.message))),
    )

export const getPlaceRequestEpic = (action$, state$) =>
  action$.ofType(SEARCH_ACTIONS.GET_PLACE).switchMap(action =>
    Observable.fromPromise(
      getPlaceRequest(action.placeId, state$.getState().user),
    )
      .map(searchActions.fulfilled)
      .catch(error => Observable.of(searchActions.rejected(error.message))),
  )
