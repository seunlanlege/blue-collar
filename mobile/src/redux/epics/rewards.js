import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { actions, ACTIONS } from '../modules/rewards'
import * as rewardApi from '../effects/api/rewards'

export const redeem = (action$, store) =>
  action$
    .ofType(ACTIONS.REDEEM)
    .switchMap(({ payload: { redeemType, amount, txType } }) =>
      Observable.fromPromise(
        rewardApi.post({
          user: store.getState().users,
          redeemType,
          amount,
          txType,
        }),
      )
        .map(actions.fulfilled)
        .catch(error => Observable.of(actions.rejected(error.message))),
    )

export default combineEpics(redeem)
