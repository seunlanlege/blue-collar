import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'

import { SIGNUP_ACTIONS, signUpActions } from '../modules/signup'
import { signUp } from '../effects/facebook'

export const signUpRequest = action$ =>
  action$.ofType(SIGNUP_ACTIONS.REQUEST).concatMap(() =>
    Observable.fromPromise(signUp())
      .flatMap(payload =>
        ajax
          .getJSON(
            `https://graph.facebook.com/me?access_token=${payload.token}`,
          )
          .flatMap(response =>
            Observable.of(signUpActions.fulfilled(response)),
          ),
      )
      .catch(error => Observable.of(signUpActions.rejected(error))),
  )
