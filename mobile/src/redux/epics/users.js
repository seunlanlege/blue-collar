import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/users'
import {
  ACTIONS as USER_DATA,
  actions as dataEntryActions,
} from '../modules/user-data-entry'
import { actions as modalActions } from '../modules/modals'
import * as usersApi from '../effects/api/users'

const login = (action$, store) =>
  action$
    .ofType(ACTIONS.LOGIN)
    .switchMap(({ payload: { email, password } }) =>
      Observable.fromPromise(usersApi.login({ email, password }))
        .map(({ user }) => user)
        .catch(err => Observable.of(actions.loginRejected(err))),
    )
    .switchMap(usr =>
      Observable.fromPromise(usersApi.show({ user: usr }))
        .flatMap(({ user }) => [
          actions.loginFulfilled(user),
          modalActions.toggle('logIn', false),
        ])
        .catch(err => Observable.of(actions.loginRejected(err))),
    )

const signup = (action$, store) =>
  action$.ofType(ACTIONS.SIGNUP).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.signup({ email, password }))
      .map(({ user }) => actions.loginFulfilled(user))
      .catch(err => Observable.of(actions.loginRejected(err))),
  )

const logout = (action$, store) =>
  action$.ofType(ACTIONS.LOGOUT).switchMap(_action =>
    Observable.fromPromise(usersApi.logout({ user: store.getState().users }))
      .map(() => actions.logoutFulfilled())
      .catch(err => Observable.of(actions.logoutRejected(err))),
  )

const update = (action$, store) =>
  action$.ofType(USER_DATA.UPDATE).switchMap(({ payload: { userForm } }) =>
    Observable.fromPromise(
      usersApi.update({
        user: store.getState().users,
        userForm,
      }),
    )
      .flatMap(({ user, authHeaders }) => [
        actions.loginFulfilled({ user, authHeaders }),
        modalActions.toggle('subscription', true),
      ])
      .catch(err => Observable.of(dataEntryActions.rejected(err))),
  )

export default combineEpics(login, signup, logout, update)
