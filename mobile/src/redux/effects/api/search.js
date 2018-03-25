import axios from 'axios'
import http from './http-client'
import { authHeader } from './utils'

import CONFIG from '../../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `${
        CONFIG.GOOGLE_PLACE_URL
      }/json?location=${lat},${long}&rankby=distance&keyword=${query}&key=${
        CONFIG.GOOGLE_API_KEY
      }`,
    )
    .then(({ data }) => data && data.results)

export const getPlaceRequest = (placeId, auth) =>
  http
    .get(`${CONFIG.VENUE_URL}?place_id=${placeId}`, authHeader(auth))
    .then(({ data }) => data.data)
