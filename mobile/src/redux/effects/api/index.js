import axios from 'axios'
import { authRequest, logOutRequest } from './login'
import { userDataRequest } from './users'
import { subscriptionRequest } from './user-subscription'
import { getPlaceRequest } from './places'
import { getReviewsRequest } from './reviews'

const searchReview = query =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

const fetchReward = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

const redeemPoint = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

export {
  authRequest,
  fetchReward,
  getPlaceRequest,
  getReviewsRequest,
  logOutRequest,
  subscriptionRequest,
  redeemPoint,
  searchReview,
  userDataRequest,
}
