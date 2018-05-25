import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/places'
import {
  ACTIONS as REVIEW_ACTIONS,
  actions as reviewActions,
} from '../modules/reviews'
import * as googleApi from '../effects/google-places'
import { getStatus, getLocation } from '../effects/location'
import * as placeApi from '../effects/api/places'

const search = action$ =>
  action$
    .ofType(ACTIONS.SEARCH)
    .debounceTime(250)
    .switchMap(action =>
      Observable.fromPromise(
        googleApi.searchRequest(action.lat, action.long, action.query),
      )
        .map(actions.searchFulfilled)
        .catch(error => Observable.of(actions.searchRejected(error))),
    )

const getStateCode = (action$, store) =>
  action$.ofType(ACTIONS.GET_PLACE).switchMap(({ placeId }) =>
    Observable.fromPromise(googleApi.getStateCode(placeId))
      .map(actions.getStateCodeFulfilled)
      .catch(error => Observable.of(actions.searchRejected(error))),
  )

const getPlace = (action$, store) =>
  action$.ofType(ACTIONS.GET_PLACE).switchMap(({ placeId }) =>
    Observable.fromPromise(
      placeApi.show({
        user: store.getState().users,
        place: { id: placeId },
      }),
    )
      .map(actions.getFulfilled)
      .catch(error => Observable.of(actions.getRejected(error))),
  )

export const postReview = (action$, store) =>
  action$
    .ofType(REVIEW_ACTIONS.POST)
    .switchMap(({ payload: { place, reviewForm } }) =>
      Observable.fromPromise(
        placeApi.createReview({
          user: store.getState().users,
          place,
          reviewForm,
        }),
      )
        .map(data => reviewActions.created(data))
        .catch(error => Observable.of(reviewActions.rejected(error))),
    )

const getCurrentLocation = (action$, store) =>
  action$
    .ofType(ACTIONS.COORDINATE)
    .switchMap(_action =>
      Observable.fromPromise(getStatus())
        .map(status => status)
        .catch(error => Observable.of(actions.rejected(error))),
    )
    .switchMap(status =>
      Observable.fromPromise(getLocation())
        .map(({ latitude, longitude }) =>
          actions.granted(status, latitude, longitude),
        )
        .catch(error => Observable.of(actions.rejected(error))),
    )

export default combineEpics(
  search,
  getPlace,
  getStateCode,
  postReview,
  getCurrentLocation,
)
