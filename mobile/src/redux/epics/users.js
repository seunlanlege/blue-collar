import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/users'
import {
  ACTIONS as USER_DATA,
  actions as userDataActions,
} from '../modules/user-data-entry'
import { actions as modalActions } from '../modules/modals'
import { actions as placeActions } from '../modules/places'
import * as usersApi from '../effects/api/users'
import * as placeApi from '../effects/api/places'

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
        .flatMap(user => [
          actions.loginFulfilled(
            Object.assign({}, user, { authHeaders: usr.authHeaders }),
          ),
          modalActions.toggle('logIn', false),
        ])
        .catch(err => Observable.of(actions.loginRejected(err))),
    )

const signup = (action$, store) =>
  action$.ofType(ACTIONS.SIGNUP).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.signup({ email, password }))
      .flatMap(({ user }) => [
        actions.loginFulfilled(user),
        modalActions.toggle('userDetail', true),
      ])
      .catch(err => Observable.of(actions.loginRejected(err))),
  )

const logout = (action$, store) =>
  action$.ofType(ACTIONS.LOGOUT).switchMap(_action =>
    Observable.fromPromise(usersApi.logout({ user: store.getState().users }))
      .map(() => actions.logoutFulfilled())
      .catch(err => Observable.of(actions.logoutRejected(err))),
  )

const update = (action$, store) =>
  action$
    .ofType(USER_DATA.UPDATE)
    .switchMap(({ payload: { userForm } }) =>
      Observable.fromPromise(
        usersApi.update({
          user: store.getState().users,
          userForm,
        }),
      )
        .map(data => data)
        .catch(err => Observable.of(actions.loginRejected(err))),
    )
    .switchMap(userData =>
      Observable.fromPromise(
        placeApi.show({
          user: store.getState().users,
          place: { id: store.getState().userDataEntry.placeId },
        }),
      )
        .flatMap(data => [
          modalActions.toggle('userDetail', false),
          placeActions.getFulfilled(data),
          userDataActions.fulfilled(),
          actions.loginFulfilled(userData),
          modalActions.toggle(
            data.reviews.length > 0 ? 'subscription' : 'comingSoon',
            true,
          ),
        ])
        .catch(error => Observable.of(userDataActions.rejected(error.message))),
    )

const getLatestReviews = (action$, store) =>
  action$.ofType(ACTIONS.GET_LATEST_REVIEWS).switchMap(_action =>
    Observable.fromPromise(usersApi.show({ user: store.getState().users }))
      .map(actions.latestReviewsFulfilled)
      .catch(error => Observable.of(actions.loginRejected(error.message))),
  )

export const bid = (action$, store) =>
  action$.ofType(ACTIONS.PLACE_BID).switchMap(action =>
    Observable.fromPromise(
      placeApi.createBid({
        user: store.getState().users,
        place: store.getState().places,
      }),
    )
      .map(actions.bidFulfilled)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export default combineEpics(
  login,
  signup,
  bid,
  logout,
  update,
  getLatestReviews,
)
