import { Observable } from 'rxjs'

import { LOGIN_ACTIONS, logInActions } from '../modules/login'
import { signUp } from '../effects/facebook'

export const signUpRequest = action$ =>
  action$.ofType(LOGIN_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(signUp())
      .map(logInActions.fulfilled)
      .catch(error => Observable.of(logInActions.rejected(error))),
  )
