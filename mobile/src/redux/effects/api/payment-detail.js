import http from './http-client'
import CONFIG from '../../../../config'
import { authHeader, stripeData } from './utils'

export const paymentRequest = (payload, auth) =>
  http.post(
    `${CONFIG.SUBSCRIPTION_URL}/${auth.userId}/subscription`,
    stripeData(payload),
    authHeader(auth),
  )
