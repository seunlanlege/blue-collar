import { Observable } from 'rxjs'

import { ACTIONS, actions } from '../modules/promo'
import * as userApi from '../effects/api/users'

export const redeemPromoCode = (action$, state$) =>
  action$.ofType(ACTIONS.REDEEM).switchMap(({ payload: { promoCode } }) =>
    Observable.fromPromise(
      userApi.promo({
        user: state$.getState().users,
        promoCode,
      }),
    )
      .map(actions.fulfilled)
      .catch(error => Observable.of(actions.rejected(error))),
  )
