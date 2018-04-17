import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { actions, ACTIONS } from '../modules/reviews'
import { getReviewsRequest, searchReview, postReview } from '../effects/api'

export const fetch = (action$, state$) =>
  action$.ofType(ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(getReviewsRequest(state$.getState().users))
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export const search = action$ =>
  action$.ofType(ACTIONS.SEARCH).switchMap(action =>
    Observable.fromPromise(searchReview())
      .map(actions.searchFulfilled)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export const post = (action$, state$) =>
  action$.ofType(ACTIONS.POST).switchMap(action =>
    Observable.fromPromise(
      postReview(state$.getState().reviews, state$.getState().users),
    )
      .map(actions.created)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export default combineEpics(fetch, search, post)
