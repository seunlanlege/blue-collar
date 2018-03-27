import http from './http-client'
import { authHeader } from './utils'

import CONFIG from '../../../../config'

export const getReviewsRequest = (placeId, auth) =>
  http.get(CONFIG.REVIEWS_PATH, authHeader(auth)).then(({ data }) => data.data)
