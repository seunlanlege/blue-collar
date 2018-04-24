import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS as USER_ACTIONS } from '../modules/users'
import { login as fbLogin } from '../effects/facebook'

const login = (action$, store) =>
  action$.ofType(USER_ACTIONS.FB_LOGIN).mergeMap(() =>
    Observable.fromPromise(fbLogin())
      .map(console.log)
      .catch(console.log),
  )

export default combineEpics(login)
