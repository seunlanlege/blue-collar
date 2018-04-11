import { Observable } from 'rxjs'

import { REDEEM_ACTIONS, redeemActions } from '../modules/redeems'
import { postReedem } from '../effects/api'

export const redeemPromoCodeEpic = (action$, state$) =>
  action$.ofType(REDEEM_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(
      postReedem(state$.getState().redeems, state$.getState().users),
    )
      .map(redeemActions.fulfilled)
      .catch(error => Observable.of(redeemActions.rejected(error))),
  )
