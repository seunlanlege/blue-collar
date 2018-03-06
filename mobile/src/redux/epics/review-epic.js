import { Observable } from 'rxjs'

import { writeReviewActions, WRITE_REVIEW_ACTIONS } from '../modules/review'
import { fetchReview, searchReview } from '../effects/api'

export const fetchReviewEpic = action$ =>
  action$.ofType(WRITE_REVIEW_ACTIONS.FETCH_REVIEW).switchMap(action =>
    Observable.fromPromise(fetchReview())
      .map(writeReviewActions.fetchReviewFulfilled)
      .catch(error =>
        Observable.of(writeReviewActions.fetchReviewRejected(error.message)),
      ),
  )

export const searchReviewEpic = action$ =>
  action$.ofType(WRITE_REVIEW_ACTIONS.SEARCH).switchMap(action =>
    Observable.fromPromise(searchReview())
      .map(writeReviewActions.searchFulfilled)
      .catch(error =>
        Observable.of(writeReviewActions.fetchReviewRejected(error.message)),
      ),
  )
