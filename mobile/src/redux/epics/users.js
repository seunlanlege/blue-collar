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

import CONFIG from '../../../config'

const login = (action$, store) =>
  action$.ofType(ACTIONS.LOGIN).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.login({ email, password }))
      .switchMap(({ user }) =>
        Observable.fromPromise(usersApi.show({ user }))
          .flatMap(usr => {
            if (usr.firstName) {
              return [
                actions.loginFulfilled(
                  Object.assign({}, usr, { authHeaders: user.authHeaders }),
                ),
                modalActions.toggle('logIn', false),
              ]
            }
            return [
              modalActions.toggle('logIn', false),
              actions.loginRejected('Registration not complete'),
              modalActions.toggle('userDetail', true),
            ]
          })
          .catch(err => Observable.of(actions.loginRejected())),
      )
      .catch(err => Observable.of(actions.loginRejected())),
  )

const signup = (action$, store) =>
  action$.ofType(ACTIONS.SIGNUP).switchMap(({ payload: { email, password } }) =>
    Observable.fromPromise(usersApi.signup({ email, password }))
      .flatMap(({ user }) => [
        actions.loginFulfilled(user),
        modalActions.toggle('userDetail', true),
      ])
      .catch(err => Observable.of(actions.loginRejected())),
  )

const logout = (action$, store) =>
  action$.ofType(ACTIONS.LOGOUT).switchMap(_action =>
    Observable.fromPromise(usersApi.logout({ user: store.getState().users }))
      .map(() => actions.logoutFulfilled())
      .catch(err => Observable.of(actions.logoutRejected())),
  )

const changeData = (action$, store) =>
  action$.ofType(ACTIONS.UPDATE).switchMap(({ payload: { userForm } }) =>
    Observable.fromPromise(
      usersApi.update({
        user: store.getState().users,
        userForm,
      }),
    )
      .map(user =>
        actions.loginFulfilled(
          Object.assign({}, user, {
            authHeaders: store.getState().users.authHeaders,
          }),
        ),
      )
      .catch(err => Observable.of(actions.loginRejected())),
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
        .catch(err => Observable.of(actions.loginRejected())),
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
            CONFIG.STATE_OPTIONS[data.state] ? 'subscription' : 'comingSoon',
            true,
          ),
        ])
        .catch(error => Observable.of(userDataActions.rejected())),
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
      .catch(error => Observable.of(actions.loginRejected())),
  )

export default combineEpics(
  login,
  signup,
  bid,
  logout,
  update,
  changeData,
  getLatestReviews,
)
