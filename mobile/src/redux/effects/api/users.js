// @flow
import axios from 'axios'

import { adaptPlaceParams } from './places'
import { parseReview } from './reviews'
import { errorAlert } from './errors'

import CONFIG from '../../../../config'

// {
//   activeBids: [],
//   authHeaders: {
//     'access-token': 'q7iiA1ayARqnuma9aBl4bw',
//     client: 'm-p5-OTqdQUPnxsc_4swfA',
//     expiry: '1533464255',
//     'token-type': 'Bearer',
//     uid: 'seun@hbyte.com',
//   },
//   contactable: true,
//   email: 'seun@hbyte.com',
//   firstName: 'seun',
//   id: 1,
//   jobPosition: 1,
//   lastName: 'LanLege ',
//   place: {
//     category: 'company',
//     created_at: '2018-05-27T10:18:07.451Z',
//     formatted_address: 'Lagos, Nigeria',
//     google_id: 'ChIJwYCC5iqLOxARy9nDZ6OHntw',
//     id: 1,
//     latitude: '6.5243793',
//     longitude: '3.3792057',
//     name: 'paysquare ',
//     state: 'LA',
//     unit_id: '3001',
//     updated_at: '2018-05-27T10:18:07.451Z',
//   },
//   placeId: 1,
//   placeReviews: [],
//   places: null,
//   referralCode: '9M-AtxN9',
//   rewards: {
//     availablePoints: 0,
//     lifetimePoints: 0,
//   },
//   subscription: null,
//   trade: 'carpenter',
// }

export interface IAuthHeaders {
  tokenType: string;
  accessToken: string;
  client: string;
  expiry: string;
  uid: string;
}

export interface IUser {
  authHeaders: IAuthHeaders;
  id: string;
  email: string;
  referralCode: string;
  first_name: string;
  last_name: string;
  trade: string;
  contactable: string;
  job_position: string;
}

export const getAuthHeaders = (headers: any) => ({
  'token-type': headers['token-type'],
  'access-token': headers['access-token'],
  client: headers.client,
  expiry: headers.expiry,
  uid: headers.uid,
})

export const getAuthHeaders2 = (headers: any): IAuthHeaders => ({
  tokenType: headers['token-type'],
  accessToken: headers['access-token'],
  client: headers.client,
  expiry: headers.expiry,
  uid: headers.uid,
})

export const parseUser = (data: any) => ({
  id: data.id,
  email: data.email,
  referralCode: data.referral_code,
  firstName: data.first_name,
  lastName: data.last_name,
  trade: data.trade,
  contactable: data.contactable,
  placeId: data.place_id,
  jobPosition: data.job_position === 'owner' ? 2 : 1,
  activeBids: data.active_bids,
  rewards: {
    lifetimePoints: data.rewards.lifetime_points,
    availablePoints: data.rewards.available_points,
  },
  subscription: data.subscription
    ? {
        cardLastFour: data.subscription.card_last_four,
        nextBilling: new Date(data.subscription.next_billing),
        price: data.subscription.price_in_cents / 100,
      }
    : null,
  placeReviews: data.place_reviews ? data.place_reviews.map(parseReview) : [],
  places: data.places ? data.places : null,
  place: data.place ? data.place : null,
})

// Public

export const signup = ({ email, password }: any) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/auth`,
    data: {
      email,
      password,
      password_confirmation: password,
    },
  })
    .then(({ headers, data: { data } }) => ({
      user: {
        authHeaders: getAuthHeaders(headers),
        id: data.id,
        email: data.email,
        referralCode: data.referral_code,
      },
    }))
    .catch(errorAlert)

export const facebookSignup = ({ email, name, uid }: any) =>
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
  })
    .then(({ headers, data }) => ({
      user: {
        authHeaders: getAuthHeaders(headers),
        id: data.id,
        email: data.email,
        referralCode: data.referral_code,
      },
    }))
    .catch(errorAlert)

export const login = ({ email, password }: any) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/auth/sign_in`,
    data: {
      email,
      password,
      //   password_confirmation: password,
    },
  })
    .then(({ headers, data: { data } }) => ({
      user: {
        authHeaders: getAuthHeaders(headers),
        id: data.id,
        email: data.email,
        referralCode: data.referral_code,
      },
    }))
    .catch(errorAlert)

export const logout = ({ user: { authHeaders } }: any) =>
  axios({
    method: 'delete',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/auth/sign_out`,
  })
    .then(({ data }) => data) // response payload not used?
    .catch(errorAlert)

export const show = ({ user: { id, authHeaders } }: any) =>
  axios({
    method: 'get',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}`,
  })
    .then(({ data }) => parseUser(data))
    .catch(errorAlert)

export const update = ({
  user: { id, authHeaders },
  userForm: { user, place },
}: any) =>
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
  })
    .then(({ data }) => parseUser(data))
    .catch(errorAlert)

export const promo = ({ user: { id, authHeaders }, promoCode }: any) =>
  axios({
    method: 'post',
    headers: '',
    url: `${CONFIG.API_BASE_URL}/api/v1/users/promo`, // verify the endpoint
    data: { user_id: id, promo_code: promoCode },
  })
    .then(({ data }) => data)
    .catch(errorAlert)
