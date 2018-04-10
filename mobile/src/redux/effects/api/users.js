import axios from 'axios'

import http from './http-client'
import { authHeader, setUserData } from './utils'

import CONFIG from '../../../../config'

const getAuthHeaders = headers => ({
  'token-type': headers['token-type'],
  'access-token': headers['access-token'],
  client: headers.client,
  expiry: headers.expiry,
  uid: headers.uid,
})

const parseUser = data => ({
  id: data.id,
  firstName: data.first_name,
  lastName: data.last_name,
  email: data.email,
  trade: data.trade,
  contactable: data.contactable,
  placeId: data.place_id,
  jobPosition: data.job_position,
  referralCode: data.referral_code,
  active_bids: data.active_bids,
})

// Public

// TODO: Delete this method.
export const userDataRequest = (payload, auth) =>
  http
    .put(
      `${CONFIG.USERS_PATH}/${auth.userId}`,
      authHeader(auth),
      setUserData(payload),
    )
    .then(({ data }) => data)

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
        last_name: user.lastNme,
        trade: user.trade,
        contactable: user.contactable,
        job_position: user.jobPosition,
      },
      place: {
        google_id: place.googleId,
        name: place.name,
        vicinity: place.vicinity,
        category: place.category,
      },
    },
  }).then(({ data }) => parseUser(data))
