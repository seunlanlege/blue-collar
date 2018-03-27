import { Observable } from 'rxjs'

import { reviewActions, REVIEW_ACTIONS } from '../modules/reviews'
import { getReviewsRequest, searchReview } from '../effects/api'

export const fetchReviewEpic = action$ =>
  action$.ofType(REVIEW_ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(getReviewsRequest())
      .map(reviewActions.fulfilled)
      .catch(error => Observable.of(reviewActions.rejected(error.message))),
  )

export const searchReviewEpic = action$ =>
  action$.ofType(REVIEW_ACTIONS.SEARCH).switchMap(action =>
    Observable.fromPromise(searchReview())
      .map(reviewActions.searchFulfilled)
      .catch(error =>
        Observable.of(reviewActions.fetchReviewRejected(error.message)),
      ),
  )
