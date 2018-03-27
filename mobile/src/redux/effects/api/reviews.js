import http from './http-client'
import { authHeader, setPostReviewData } from './utils'

import CONFIG from '../../../../config'

export const getReviewsRequest = (placeId, auth) =>
  http.get(CONFIG.REVIEWS_PATH, authHeader(auth)).then(({ data }) => data.data)

export const postReview = (payload, auth) =>
  http.post(CONFIG.REVIEWS_PATH, setPostReviewData(payload), authHeader(auth))
