import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/users'
import * as usersApi from '../effects/api/users'

// TODO: Delete these.
import { DATA_ENTRY, dataEntryActions } from '../modules/user-data-entry'
import { userDataRequest } from '../effects/api'

// TODO: Delete this.
export const proceedUserDataEpic = (action$, state$) =>
  action$.ofType(DATA_ENTRY.REQUEST).switchMap(action =>
    Observable.fromPromise(
      userDataRequest(state$.getState().userDataEntry, state$.getState().user),
    )
      .map(dataEntryActions.fulfilled)
      .catch(error => Observable.of(dataEntryActions.rejected(error.message))),
  )

const login = (action$, state$) =>
  action$.ofType(ACTIONS.LOGIN).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.login({ email, password }))
      .map(({ user }) => actions.loginFulfilled(user))
      .catch(err => Observable.of(actions.loginRejected(err))),
  )

const signup = (action$, state$) =>
  action$.ofType(ACTIONS.SIGNUP).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.signup({ email, password }))
      .map(({ user }) => actions.loginFulfilled(user))
      .catch(err => Observable.of(actions.loginRejected(err))),
  )

export default combineEpics(login, signup)
