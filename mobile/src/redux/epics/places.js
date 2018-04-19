import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/places'
import {
  ACTIONS as REVIEW_ACTIONS,
  actions as reviewActions,
} from '../modules/reviews'
import { searchRequest } from '../effects/google-places'
import { getStatus, getLocation } from '../effects/location'
import * as placeApi from '../effects/api/places'
import * as reviewApi from '../effects/api/reviews'

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
        .catch(error => Observable.of(reviewActions.rejected(error.message))),
    )

const getReviews = (action$, store) =>
  action$.ofType(REVIEW_ACTIONS.FETCH).switchMap(_action =>
    Observable.fromPromise(
      reviewApi.get({
        user: store.getState().users,
      }),
    )
      .map(reviews => reviewActions.fulfilled(reviews))
      .catch(error => Observable.of(reviewActions.rejected(error.message))),
  )

const getCurrentLocation = (action$, store) =>
  action$
    .ofType(ACTIONS.COORDINATE)
    .switchMap(_action =>
      Observable.fromPromise(getStatus())
        .map(status => status)
        .catch(error => Observable.of(actions.rejected(error.message))),
    )
    .switchMap(status =>
      Observable.fromPromise(getLocation())
        .map(({ latitude, longitude }) =>
          actions.granted(status, latitude, longitude),
        )
        .catch(error => Observable.of(actions.rejected(error.message))),
    )

export default combineEpics(
  search,
  getPlace,
  bid,
  getReviews,
  postReview,
  getCurrentLocation,
)
