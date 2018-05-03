import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { login as fbLogin } from '../effects/facebook'
import * as usersApi from '../effects/api/users'
import { actions, ACTIONS as USER_ACTIONS } from '../modules/users'
import { actions as modalActions } from '../modules/modals'

const login = (action$, store) =>
  action$
    .ofType(USER_ACTIONS.FB_LOGIN)
    .switchMap(() =>
      Observable.fromPromise(fbLogin())
        .map(data => data)
        .catch(err => Observable.of(actions.loginRejected(err.message))),
    )
    .switchMap(usr => {
      if (usr) {
        return Observable.fromPromise(usersApi.show({ user: usr }))
          .flatMap(user => [
            actions.loginFulfilled(
              Object.assign({}, user, { authHeaders: usr.authHeaders }),
            ),
            modalActions.toggle('logIn', false),
          ])
          .catch(err => Observable.of(actions.loginRejected(err.message)))
      }
      return Observable.of(actions.loginRejected('User not found!'))
    })

const signup = (action$, store) =>
  action$.ofType(USER_ACTIONS.FB_SIGNUP).switchMap(() =>
    Observable.fromPromise(fbLogin())
      .flatMap(({ user }) => [
        actions.loginFulfilled(user),
        modalActions.toggle('userDetail', true),
      ])
      .catch(err => Observable.of(actions.loginRejected(err.message))),
  )

export default combineEpics(login, signup)
