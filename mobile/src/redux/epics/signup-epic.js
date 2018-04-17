import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/login'
import { signUp } from '../effects/facebook'

export const fbAuthRequest = action$ =>
  action$.ofType(ACTIONS.FACEBOOK_AUTH).switchMap(action =>
    Observable.fromPromise(signUp())
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )
