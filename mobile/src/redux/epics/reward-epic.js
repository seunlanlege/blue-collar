import { Observable } from 'rxjs'

import { rewardActions, REWARD_ACTIONS } from '../modules/reward'
import { fetchReward, redeemPoint } from '../effects/api'

export const fetchRewardEpic = action$ =>
  action$.ofType(REWARD_ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(fetchReward())
      .map(rewardActions.fulfilled)
      .catch(error => Observable.of(rewardActions.rejected(error.message))),
  )

export const redeemPointEpic = action$ =>
  action$.ofType(REWARD_ACTIONS.REDEEM).switchMap(action =>
    Observable.fromPromise(redeemPoint())
      .map(rewardActions.redeemSuccess)
      .catch(error => Observable.of(rewardActions.rejected(error.message))),
  )
