import http from './http-client'
import CONFIG from '../../../../config'
import { authHeader, cardData } from './utils'

export const subscriptionRequest = (payload, auth) =>
  http.post(
    `${CONFIG.USERS_PATH}/${auth.userId}/subscription`,
    cardData(payload),
    authHeader(auth),
  )

export const getSubscription = auth =>
  http.get(`${CONFIG.USERS_PATH}/${auth.userId}/subscription`, authHeader(auth))

export const subscriptionRemove = ({ subscriptionId }, auth) =>
  http.delete(
    `${CONFIG.USERS_PATH}/${auth.userId}/subscription/${subscriptionId}`,
    authHeader(auth),
  )
