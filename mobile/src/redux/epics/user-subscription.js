import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/user-subscription'
import {
  subscriptionRequest,
  getSubscription,
  subscriptionRemove,
} from '../effects/api'

export const subscriptionEpic = (action$, state$) =>
  action$.ofType(ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(
      subscriptionRequest(
        state$.getState().userSubscription,
        state$.getState().users,
      ),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )

export const getSubscriptionEpic = (action$, state$) =>
  action$.ofType(ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(getSubscription(state$.getState().users))
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )

export const subscriptionRemoveEpic = (action$, state$) =>
  action$.ofType(ACTIONS.REMOVE).switchMap(action =>
    Observable.fromPromise(
      subscriptionRemove(
        state$.getState().userSubscription,
        state$.getState().users,
      ),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )
