import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/places'
import { searchRequest } from '../effects/google-places'
import * as placeApi from '../effects/api/places'

export const search = action$ =>
  action$
    .ofType(ACTIONS.SEARCH)
    .debounceTime(250)
    .switchMap(action =>
      Observable.fromPromise(
        searchRequest(action.lat, action.long, action.query),
      )
        .map(actions.searchFulfilled)
        .catch(error => Observable.of(actions.searchRejected(error.message))),
    )

export const getPlace = (action$, store) =>
  action$.ofType(ACTIONS.GET_PLACE).switchMap(action =>
    Observable.fromPromise(
      placeApi.show({
        user: store.getState().users,
        place: { id: action.placeId },
      }),
    )
      .map(actions.getFulfilled)
      .catch(error => Observable.of(actions.getRejected(error.message))),
  )

export const bid = (action$, store) =>
  action$.ofType(ACTIONS.PLACE_BID).switchMap(action =>
    Observable.fromPromise(
      placeApi.createBid(store.getState().places, store.getState().users),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export default combineEpics(search, getPlace, bid)
