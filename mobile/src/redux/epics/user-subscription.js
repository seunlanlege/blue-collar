import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/user-subscription'
import { createToken } from '../effects/stripe'
import * as subscriptionApi from '../effects/api/user-subscription'

const postSubscription = (action$, store) =>
  action$
    .ofType(ACTIONS.REQUEST)
    .switchMap(
      ({ payload: { cardNumber, cvc, expirationDate, cardHolderName } }) =>
        Observable.fromPromise(
          createToken({ cardNumber, cvc, expirationDate, cardHolderName }),
        )
          .map(({ data: { id } }) => id)
          .catch(error => Observable.of(actions.rejected(error))),
    )
    .switchMap(token =>
      Observable.fromPromise(
        subscriptionApi.post({ user: store.getState().users, token }),
      )
        .map(data => actions.fulfilled(data))
        .catch(error => Observable.of(actions.rejected(error))),
    )

const getSubscription = (action$, store) =>
  action$.ofType(ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(
      subscriptionApi.show({ user: store.getState().users }),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )

const removeSubscription = (action$, store) =>
  action$.ofType(ACTIONS.REMOVE).switchMap(action =>
    Observable.fromPromise(
      subscriptionApi.remove({ user: store.getState().users }),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )

export default combineEpics(
  postSubscription,
  getSubscription,
  removeSubscription,
)
