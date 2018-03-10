import { Observable } from 'rxjs'

import { rewardActions, REWARD_ACTIONS } from '../modules/reward'
import { fetchReward } from '../effects/api'

export const fetchRewardEpic = action$ =>
  action$.ofType(REWARD_ACTIONS.FETCH).switchMap(action =>
    Observable.fromPromise(fetchReward())
      .map(rewardActions.fulfilled)
      .catch(error => Observable.of(rewardActions.rejected(error.message))),
  )
