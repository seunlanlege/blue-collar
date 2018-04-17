import axios from 'axios'

import http from './http-client'
import { authHeader } from './utils'

import CONFIG from '../../../../config'

export const adaptPlaceParams = place => ({
  google_id: place.googleId,
  name: place.name,
  vicinity: place.vicinity,
  category: place.category,
})

const parseReview = review => ({
  id: review.id,
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
})

// Public

export const placeBid = (place, auth) =>
  http
    .post(`${CONFIG.PLACES_PATH}/${place.id}/bids`, authHeader(auth))
    .then(({ data }) => data)

// TODO: Use googleId.
export const show = ({ user: { authHeaders }, place }) =>
  axios({
    method: 'get',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/places/${place.id}`,
  }).then(({ data }) => ({
    id: data.id,
    createdAt: Date.parse(data.created_at),
    updatedAt: Date.parse(data.updated_at),
    googleId: data.google_id,
    name: data.name,
    vicinity: data.vicinity,
    category: data.category,
    activeBidsCount: data.active_bids_count,
    reviews: data.reviews.map(parseReview),
  }))

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
