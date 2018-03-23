import { Observable } from 'rxjs'

import { LOGIN_ACTIONS, logInActions } from '../modules/login'
import { signUp } from '../effects/facebook'

export const fbAuthRequest = action$ =>
  action$.ofType(LOGIN_ACTIONS.FACEBOOK_AUTH).switchMap(action =>
    Observable.fromPromise(signUp())
      .map(logInActions.fulfilled)
      .catch(error => Observable.of(logInActions.rejected(error))),
  )
