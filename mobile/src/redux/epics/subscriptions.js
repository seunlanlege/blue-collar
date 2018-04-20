import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/subscription'
import { actions as modalActions } from '../modules/modals'
import { createToken } from '../effects/stripe'
import * as subscriptionApi from '../effects/api/subscription'

const postSubscription = (action$, store) =>
  action$
    .ofType(ACTIONS.REQUEST)
    .switchMap(
      ({ payload: { cardNumber, cvc, expirationDate, cardHolderName } }) =>
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
        .flatMap(data => [
          actions.fulfilled(data),
          modalActions.toggle('subscription', false),
        ])
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