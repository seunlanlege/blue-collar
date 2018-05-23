import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/subscription'
import { actions as userActions } from '../modules/users'
import { actions as modalActions } from '../modules/modals'
import { createToken } from '../effects/stripe'
import * as subscriptionApi from '../effects/api/subscription'

import { getErrorMessage } from '../../helpers'

const postSubscription = (action$, store) =>
  action$
    .ofType(ACTIONS.CREATE)
    .switchMap(
      ({ payload: { cardNumber, cvc, expirationDate, cardHolderName } }) =>
        Observable.fromPromise(
          createToken({ cardNumber, cvc, expirationDate, cardHolderName }),
        )
          .map(({ id }) => id)
          .catch(error =>
            Observable.of(actions.rejected(getErrorMessage(error))),
          ),
    )
    .switchMap(token =>
      Observable.fromPromise(
        subscriptionApi.post({ user: store.getState().users, token }),
      )
        .flatMap(data => [
          userActions.loginFulfilled(data),
          modalActions.toggle('subscription', false),
        ])
        .catch(error =>
          Observable.of(actions.rejected(getErrorMessage(error))),
        ),
    )

const removeSubscription = (action$, store) =>
  action$.ofType(ACTIONS.REMOVE).switchMap(action =>
    Observable.fromPromise(
      subscriptionApi.remove({ user: store.getState().users }),
    )
      .map(userActions.loginFulfilled)
      .catch(error => Observable.of(actions.rejected(getErrorMessage(error)))),
  )

export default combineEpics(postSubscription, removeSubscription)
