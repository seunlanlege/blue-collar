import axios from 'axios'

import CONFIG from '../../../../config'

import { parseReview } from './reviews'

export const adaptPlaceParams = place => ({
  google_id: place.googleId,
  name: place.name,
  formatted_address: place.formattedAddress,
  category: place.category,
  latitude: place.lat,
  longitude: place.lng,
  state: place.state,
})

export const parsePlace = place => ({
  id: place.id,
  createdAt: Date.parse(place.created_at),
  updatedAt: Date.parse(place.updated_at),
  googleId: place.google_id,
  name: place.name,
  formattedAddress: place.formatted_address,
  state: place.state,
  category: place.category,
  lat: place.latitude,
  lng: place.longitude,
  postalCode: place.postal_code,
  activeBidsCount: place.active_bids_count ? place.active_bids_count : null,
  reviews: place.reviews ? place.reviews.map(parseReview) : null,
})

// Public

// TODO: Use googleId.
export const show = ({ user: { authHeaders }, place }) =>
  axios({
    method: 'get',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/places/${place.id}`,
  }).then(({ data }) => parsePlace(data))

export const createBid = ({ user: { authHeaders }, place }) =>
  axios({
    method: 'post',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/places/${place.id}/bids`,
    data: { place: adaptPlaceParams(place) },
  }).then(({ data }) => data) // unused response?

export const createReview = ({ user: { authHeaders }, place, reviewForm }) =>
  axios({
    method: 'post',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/places/${place.googleId}/reviews`,
    data: {
      place: adaptPlaceParams(place),
      place_review: {
        poc_name: reviewForm.pocName,
        poc_type: reviewForm.pocType,
        star_bid_process: reviewForm.starBidProcess,
        star_change_orders_accepted: reviewForm.starChangeOrdersAccepted,
        star_time_respected: reviewForm.starTimeRespected,
        star_job_completed: reviewForm.starJobCompleted,
        star_payments_satifaction: reviewForm.starPaymentsSatisfaction,
        star_work_with_again: reviewForm.starWorkWithAgain,
        star_overall: reviewForm.starOverall,
        comments: reviewForm.comments,
        bought_materials: reviewForm.boughtMaterials,
        other_party_involved: reviewForm.otherPartyInvolved,
        dollars_lost: reviewForm.dollarsLost,
      },
    },
  }).then(({ data }) => parseReview(data))
