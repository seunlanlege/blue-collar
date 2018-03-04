import { Observable } from 'rxjs'

import { writeReviewActions, WRITE_REVIEW_ACTIONS } from '../modules/review'
import { fetchReview } from '../effects/review'

// TODO Change to actual API later
const data = require('../../dummy-data/reviews.json')

export const fetchReviewEpic = action$ =>
  action$.ofType(WRITE_REVIEW_ACTIONS.FETCH_REVIEW).switchMap(() =>
    Observable.fromPromise(fetchReview())
      .flatMap(() =>
        Observable.of(writeReviewActions.fetchReviewFulfilled(data)),
      )
      .catch(error =>
        Observable.of(writeReviewActions.fetchReviewRejected(error.message)),
      ),
  )
