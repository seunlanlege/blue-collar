import http from './http-client'
import { authHeader } from './utils'

import CONFIG from '../../../../config'

export const getPlaceRequest = (googlePlaceId, auth) =>
  http
    .get(
      `${CONFIG.PLACES_PATH}?google_place_id=${googlePlaceId}`,
      authHeader(auth),
    )
    .then(({ data }) => data)

export const placeBid = (place, auth) =>
  http
    .post(`${CONFIG.PLACES_PATH}/${place.id}/bids`, authHeader(auth))
    .then(({ data }) => data)
