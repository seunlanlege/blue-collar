import { Observable } from 'rxjs'

import { VENUE_ACTIONS, venueActions } from '../modules/venues'
import { searchRequest } from '../effects/google-places'
import { getPlaceRequest } from '../effects/api'

export const searchRequestEpic = action$ =>
  action$
    .ofType(VENUE_ACTIONS.SEARCH)
    .debounceTime(200)
    .switchMap(action =>
      Observable.fromPromise(
        searchRequest(action.lat, action.long, action.query),
      )
        .map(venueActions.fulfilled)
        .catch(error => Observable.of(venueActions.rejected(error.message))),
    )

export const getPlaceRequestEpic = (action$, state$) =>
  action$.ofType(VENUE_ACTIONS.GET_PLACE).switchMap(action =>
    Observable.fromPromise(
      getPlaceRequest(action.placeId, state$.getState().user),
    )
      .map(venueActions.fulfilled)
      .catch(error => Observable.of(venueActions.rejected(error.message))),
  )
