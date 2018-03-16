import { Observable } from 'rxjs'

import { LOGIN_ACTIONS, logInActions } from '../modules/login'
import { logInRequest, logOutRequest } from '../effects/api'
import { userActions } from '../modules/users'

export const logInRequestEpic = action$ =>
  action$.ofType(LOGIN_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(logInRequest(action.payload))
      .map(userActions.store)
      .catch(error => Observable.of(logInActions.rejected(error))),
  )

export const logOutRequestEpic = action$ =>
  action$
    .ofType(LOGIN_ACTIONS.LOGOUT_REQUEST)
    .switchMap(action =>
      Observable.fromPromise(logOutRequest()).map(logInActions.logout),
    )
