export const authHeader = ({
  accessToken,
  tokenType,
  client,
  expiry,
  uid,
}) => ({
  headers: {
    'access-token': accessToken,
    'token-type': tokenType,
    client,
    expiry,
    uid,
  },
})

export const setUserData = ({
  firstName,
  lastName,
  trade,
  jobPosition,
  vicinity,
  placeId,
  name,
  category,
}) => ({
  user: {
    first_name: firstName,
    last_name: lastName,
    trade: trade.toLowerCase().replace(/\s/g, '_'),
    job_position: jobPosition,
    place: {
      vicinity,
      google_place_id: placeId,
      name,
      category,
    },
  },
})

export const cardData = ({
  cardNumber,
  cardHolderName,
  expirationDate,
  cvv,
}) => ({ cardNumber, cardHolderName, expirationDate, cvv })

export const setPostReviewData = ({
  userId,
  pointOfContactType,
  comments,
  startBidProcess,
  starChangeOrdersAccepted,
  starTimeRespected,
  starJobCompleted,
  startPaymentSaticfaction,
  starWorkWithAgain,
  startOverall,
  boughtMaterial,
  otherPartyInvolved,
  dollarsLost,
  googlePlaceId,
  name,
  vicinity,
}) => ({
  reviewer_id: userId,
  point_of_contact_type: pointOfContactType,
  comments,
  star_bid_process: startBidProcess,
  star_change_orders_accepted: starChangeOrdersAccepted,
  star_time_respected: starTimeRespected,
  star_job_completed: starJobCompleted,
  star_payments_satifaction: startPaymentSaticfaction,
  star_work_with_again: starWorkWithAgain,
  star_overall: startOverall,
  bought_materials: boughtMaterial,
  other_party_involved: otherPartyInvolved,
  dollars_lost: dollarsLost,
  place: {
    google_place_id: googlePlaceId,
    name,
    vicinity,
    category: 'venue',
  },
})
