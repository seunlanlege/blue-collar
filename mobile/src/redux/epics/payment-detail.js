import { Observable } from 'rxjs'

import { PAYMENT_ACTIONS, paymentActions } from '../modules/payment-detail'
import { paymentRequest } from '../effects/api'

export const paymentDetailEpic = (action$, state$) =>
  action$.ofType(PAYMENT_ACTIONS.REQUEST).switchMap(action =>
    Observable.fromPromise(
      paymentRequest(state$.getState().paymentDetail, state$.getState().user),
    )
      .map(paymentActions.fulfilled)
      .catch(error => Observable.of(paymentActions.rejected(error))),
  )
