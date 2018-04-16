import axios from 'axios'

import { adaptPlaceParams } from './places'

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
  email: data.email,
  referralCode: data.referral_code,
  firstName: data.first_name,
  lastName: data.last_name,
  trade: data.trade,
  contactable: data.contactable,
  placeId: data.place_id,
  jobPosition: data.job_position,
  activeBids: data.active_bids,
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
  }).then(({ data }) => ({
    user: Object.assign({}, parseUser(data), {
      authHeaders: getAuthHeaders(authHeaders),
    }),
  }))

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
  }).then(({ data }) => ({ user: parseUser(data) }))
