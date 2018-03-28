import { Observable } from 'rxjs'

import { reviewActions, REVIEW_ACTIONS } from '../modules/reviews'
import { getReviewsRequest, searchReview, postReview } from '../effects/api'

export const fetchReviewEpic = (action$, state$) =>
  action$.ofType(REVIEW_ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(getReviewsRequest(state$.getState().users))
      .map(reviewActions.fulfilled)
      .catch(error => Observable.of(reviewActions.rejected(error.message))),
  )

export const searchReviewEpic = action$ =>
  action$.ofType(REVIEW_ACTIONS.SEARCH).switchMap(action =>
    Observable.fromPromise(searchReview())
      .map(reviewActions.searchFulfilled)
      .catch(error => Observable.of(reviewActions.rejected(error.message))),
  )

export const postReviewEpic = (action$, state$) =>
  action$.ofType(REVIEW_ACTIONS.POST).switchMap(action =>
    Observable.fromPromise(
      postReview(state$.getState().reviews, state$.getState().users),
    )
      .map(reviewActions.created)
      .catch(error => Observable.of(reviewActions.rejected(error.message))),
  )
