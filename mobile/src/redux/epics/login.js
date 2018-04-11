import { Observable } from 'rxjs'

import { LOGIN_ACTIONS, logInActions } from '../modules/login'
import { authRequest, logOutRequest, forgotPassword } from '../effects/api'
import { userActions } from '../modules/users'

export const authRequestEpic = action$ =>
  action$.ofType(LOGIN_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(authRequest(action.url, action.payload))
      .map(userActions.store, logInActions.fulfilled)
      .catch(error => Observable.of(logInActions.rejected(error))),
  )

export const logOutRequestEpic = action$ =>
  action$
    .ofType(LOGIN_ACTIONS.LOGOUT_REQUEST)
    .switchMap(action =>
      Observable.fromPromise(logOutRequest()).map(logInActions.logout),
    )

export const forgotPasswordEpic = (action$, state$) =>
  action$.ofType(LOGIN_ACTIONS.FORGOT_PASSWORD).switchMap(action =>
    Observable.fromPromise(forgotPassword(action.payload))
      .map(logInActions.fulfilled)
      .catch(error => Observable.of(logInActions.rejected(error))),
  )
