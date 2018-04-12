import { Observable } from 'rxjs'

import { LOGIN_ACTIONS, logInActions } from '../modules/login'
import { forgotPassword } from '../effects/api'

export const forgotPasswordEpic = (action$, state$) =>
  action$.ofType(LOGIN_ACTIONS.FORGOT_PASSWORD).switchMap(action =>
    Observable.fromPromise(forgotPassword(action.payload))
      .map(logInActions.fulfilled)
      .catch(error => Observable.of(logInActions.rejected(error))),
  )
