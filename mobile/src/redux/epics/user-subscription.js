import { Observable } from 'rxjs'

import {
  SUBSCRIPTION_ACTIONS,
  subscriptionActions,
} from '../modules/user-subscription'
import { subscriptionRequest } from '../effects/api'

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
