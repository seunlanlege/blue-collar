import http from './http-client'
import { authHeader } from './utils'

import CONFIG from '../../../../config'

export const getPlaceRequest = (placeId, auth) =>
  http
    .get(`${CONFIG.PLACES_PATH}?place_id=${placeId}`, authHeader(auth))
    .then(({ data }) => data)
