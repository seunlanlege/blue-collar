import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'

import { actions, ACTIONS } from '../modules/rewards'
import * as rewardApi from '../effects/api/rewards'

export const redeem = (action$, store) =>
  action$.ofType(ACTIONS.REDEEM).switchMap(({ rewardTransaction }) =>
    Observable.fromPromise(
      rewardApi.post({ user: store.getState().users, rewardTransaction }),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error.message))),
  )

export default combineEpics(redeem)
