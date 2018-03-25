import axios from 'axios'
import http from './api/http-client'
import { authHeader } from './api/utils'

import CONFIG from '../../../config'

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
    .get(`${CONFIG.VENUES_PATH}?place_id=${placeId}`, authHeader(auth))
    .then(({ data }) => data.data)
