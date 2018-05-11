import axios from 'axios'

import { adaptPlaceParams } from './places'
import { parseReview } from './reviews'

import CONFIG from '../../../../config'

export const getAuthHeaders = headers => ({
  'token-type': headers['token-type'],
  'access-token': headers['access-token'],
  client: headers.client,
  expiry: headers.expiry,
  uid: headers.uid,
})

export const parseUser = data => ({
  id: data.id,
  email: data.email,
  referralCode: data.referral_code,
  firstName: data.first_name,
  lastName: data.last_name,
  trade: data.trade,
  contactable: data.contactable,
  placeId: data.place_id,
  jobPosition: data.job_position === 'owner' ? 1 : 2,
  activeBids: data.active_bids,
  rewards: {
    lifetimePoints: data.rewards.lifetime_points,
    availablePoints: data.rewards.available_points,
  },
  subscription: data.subscription
    ? {
        cardLastFour: data.subscription.card_last_four,
        nextBilling: Date(data.subscription.next_billing),
        price: data.subscription.price_in_cents / 100,
      }
    : null,
  placeReviews: data.place_reviews ? data.place_reviews.map(parseReview) : [],
  places: data.places ? data.places : null,
  place: data.place ? data.place : null,
})

// Public

export const signup = ({ email, password }) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/auth`,
    data: {
      email,
      password,
      password_confirmation: password,
    },
  }).then(({ headers, data: { data } }) => ({
    user: {
      authHeaders: getAuthHeaders(headers),
      id: data.id,
      email: data.email,
      referralCode: data.referral_code,
    },
  }))

export const facebookSignup = ({ email, name, uid }) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/api/v1/facebook_users`,
    data: {
      user: {
        email,
        first_name: name,
        provider: 'facebook',
        uid,
      },
    },
  }).then(({ headers, data }) => ({
    user: {
      authHeaders: getAuthHeaders(headers),
      id: data.id,
      email: data.email,
      referralCode: data.referral_code,
    },
  }))

export const login = ({ email, password }) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/auth/sign_in`,
    data: {
      email,
      password,
      password_confirmation: password,
    },
  }).then(({ headers, data: { data } }) => ({
    user: {
      authHeaders: getAuthHeaders(headers),
      id: data.id,
      email: data.email,
      referralCode: data.referral_code,
    },
  }))

export const logout = ({ user: { authHeaders } }) =>
  axios({
    method: 'delete',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/auth/sign_out`,
  }).then(({ data }) => data) // response payload not used?

export const show = ({ user: { id, authHeaders } }) =>
  axios({
    method: 'get',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}`,
  }).then(({ data }) => parseUser(data))

export const update = ({
  user: { id, authHeaders },
  userForm: { user, place },
}) =>
  axios({
    method: 'put',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}`,
    data: {
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        trade: user.trade.id,
        contactable: user.contactable,
        job_position: user.jobPosition,
      },
      place: adaptPlaceParams(place),
    },
  }).then(({ data }) => parseUser(data))

export const promo = ({ user: { id, authHeaders }, promoCode }) =>
  axios({
    method: 'post',
    headers: '',
    url: `${CONFIG.API_BASE_URL}/api/v1/users/promo`, // verify the endpoint
    data: { user_id: id, promo_code: promoCode },
  }).then(({ data }) => data)
