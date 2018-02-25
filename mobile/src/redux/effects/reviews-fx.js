import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/catch'

import { writeReviewActions, WRITE_REVIEW_ACTIONS } from '../modules/review'
// TODO Change to actual API later
const data = require('../../dummy-data/reviews.json')

export const fetchReviewEpic = action$ =>
  action$.pipe(
    ofType(WRITE_REVIEW_ACTIONS.FETCH_REVIEW),
    switchMap(() =>
      ajax
        .getJSON('https://jsonplaceholder.typicode.com/posts/1')
        .flatMap(() =>
          Observable.concat([
            writeReviewActions.fetchReviewFulfilled(data),
            writeReviewActions.isLoading(false),
          ]),
        )
        .catch(({ xhr }) =>
          Observable.of(writeReviewActions.fetchReviewRejected(xhr.response)),
        ),
    ),
  )
