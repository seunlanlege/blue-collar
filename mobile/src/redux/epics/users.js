import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/users'
import * as usersApi from '../effects/api/users'

// TODO: Delete these.
import { DATA_ENTRY, dataEntryActions } from '../modules/user-data-entry'
import { userDataRequest } from '../effects/api'

// TODO: Delete this.
export const proceedUserDataEpic = (action$, store) =>
  action$.ofType(DATA_ENTRY.REQUEST).switchMap(action =>
    Observable.fromPromise(
      userDataRequest(store.getState().userDataEntry, store.getState().user),
    )
      .map(dataEntryActions.fulfilled)
      .catch(error => Observable.of(dataEntryActions.rejected(error.message))),
  )

const login = (action$, store) =>
  action$.ofType(ACTIONS.LOGIN).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.login({ email, password }))
      .map(({ user }) => actions.loginFulfilled(user))
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

export default combineEpics(login, signup, logout)
