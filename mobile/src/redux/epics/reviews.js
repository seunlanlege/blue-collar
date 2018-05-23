import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/reviews'
import * as reviewsApi from '../effects/api/reviews'
import * as usersApi from '../effects/api/users'

import { getErrorMessage } from '../../helpers'

const getRecent = action$ =>
  action$.ofType(ACTIONS.GET_RECENT).switchMap(() =>
    Observable.fromPromise(reviewsApi.getRecent())
      .map(actions.getRecentFulfilled)
      .catch(error =>
        Observable.of(actions.getRecentRejected(getErrorMessage(error))),
      ),
  )

const getUser = (action$, store) =>
  action$.ofType(ACTIONS.GET_USER).switchMap(({ userId }) =>
    Observable.fromPromise(
      usersApi.show({
        user: { id: userId, authHeaders: store.getState().users.authHeaders },
      }),
    )
      .map(actions.getUserFulfilled)
      .catch(error => Observable.of(actions.rejected(getErrorMessage(error)))),
  )

export default combineEpics(getRecent, getUser)
