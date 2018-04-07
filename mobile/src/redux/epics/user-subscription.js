import { Observable } from 'rxjs'

import {
  SUBSCRIPTION_ACTIONS,
  subscriptionActions,
} from '../modules/user-subscription'
import {
  subscriptionRequest,
  getSubscription,
  subscriptionRemove,
} from '../effects/api'

export const subscriptionEpic = (action$, state$) =>
  action$.ofType(SUBSCRIPTION_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(
      subscriptionRequest(
        state$.getState().userSubscription,
        state$.getState().users,
      ),
    )
      .map(subscriptionActions.fulfilled)
      .catch(error => Observable.of(subscriptionActions.rejected(error))),
  )

export const getSubscriptionEpic = (action$, state$) =>
  action$.ofType(SUBSCRIPTION_ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(getSubscription(state$.getState().users))
      .map(subscriptionActions.fulfilled)
      .catch(error => Observable.of(subscriptionActions.rejected(error))),
  )

export const subscriptionRemoveEpic = (action$, state$) =>
  action$.ofType(SUBSCRIPTION_ACTIONS.REMOVE).switchMap(action =>
    Observable.fromPromise(
      subscriptionRemove(
        state$.getState().userSubscription,
        state$.getState().users,
      ),
    )
      .map(subscriptionActions.fulfilled)
      .catch(error => Observable.of(subscriptionActions.rejected(error))),
  )
