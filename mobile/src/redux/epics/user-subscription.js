import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/user-subscription'
import { createToken } from '../effects/stripe'
import * as subscriptionApi from '../effects/api/user-subscription'

const post = (action$, store) =>
  action$
    .ofType(ACTIONS.REQUEST)
    .switchMap(({ cardNumber, cvc, expirationDate, cardHolderName }) =>
      Observable.fromPromise(
        createToken({ cardNumber, cvc, expirationDate, cardHolderName }),
      )
        .map(({ id }) => id)
        .catch(error => Observable.of(actions.rejected(error))),
    )
    .switchMap(token =>
      Observable.fromPromise(
        subscriptionApi.post({ user: store.getState().users, token }),
      )
        .map(data => actions.fulfilled(data))
        .catch(error => Observable.of(actions.rejected(error))),
    )

const get = (action$, store) =>
  action$.ofType(ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(
      subscriptionApi.show({ user: store.getState().users }),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )

const remove = (action$, store) =>
  action$.ofType(ACTIONS.REMOVE).switchMap(action =>
    Observable.fromPromise(
      subscriptionApi.remove({ user: store.getState().users }),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )

export default combineEpics(post, get, remove)
