import { Observable } from 'rxjs'

import { SIGNUP_ACTIONS, signUpActions } from '../modules/login'
import { signUp } from '../effects/facebook'

export const signUpRequest = action$ =>
  action$.ofType(SIGNUP_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(signUp())
      .map(signUpActions.fulfilled)
      .catch(error => Observable.of(signUpActions.rejected(error))),
  )
