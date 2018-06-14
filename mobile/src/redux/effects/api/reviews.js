import axios from 'axios'

import CONFIG from '../../../../config'

// import { parsePlace } from './places'
import { errorAlert } from './errors'

export const parseReview = review => ({
  id: review.id,
  placeId: review.place_id,
  createdAt: Date.parse(review.created_at),
  updatedAt: Date.parse(review.updated_at),
  userId: review.user_id,
  pocName: review.poc_name,
  pocType: review.poc_type,
  comments: review.comments,
  starBidProcess: review.star_bid_process,
  starChangeOrdersAccepted: review.star_change_orders_accepted,
  starTimeRespected: review.star_time_respected,
  starJobCompleted: review.star_job_completed,
  starPaymentsSatisfaction: review.star_payments_satifaction,
  starWorkWithAgain: review.star_work_with_again,
  boughtMaterials: review.bought_materials,
  otherPartyInvolved: review.other_party_involved,
  dollarsLost: review.dollars_lost,
  starOverall: review.star_overall,
})

// TODO: Maybe pass lat, lng?
export const getRecent = () =>
  axios({
    method: 'get',
    url: `${CONFIG.API_BASE_URL}/api/v1/reviews`,
  })
    .then(({ data: { reviews, places, users } }) => ({
      reviews: reviews.map(parseReview),
      places,
      users,
    }))
    .catch(errorAlert)
