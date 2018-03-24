import axios from 'axios'
import http, { authHeader } from './http-client'

import CONFIG from '../../../../config'

export const searchRequest = (lat, long, query) =>
  axios
    .get(
      `${
        CONFIG.GOOGLE_PLACE_URL
      }/json?location=${lat},${long}&rankby=distance&keyword=${query}&key=${
        CONFIG.GOOLE_PLACE_API
      }`,
    )
    .then(({ data }) => data && data.results)

export const getPlaceRequest = (placeId, auth) =>
  http
    .get(`${CONFIG.VENUE_URL}`, authHeader(auth))
    .then(({ data }) => data.data)
