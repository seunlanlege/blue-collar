import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/reviews'
import * as reviewsApi from '../effects/api/reviews'

const getRecent = action$ =>
  action$.ofType(ACTIONS.GET_RECENT).switchMap(() =>
    Observable.fromPromise(reviewsApi.getRecent())
      .map(actions.getRecentFulfilled)
      .catch(error => Observable.of(actions.getRecentRejected(error.message))),
  )

export default combineEpics(getRecent)
