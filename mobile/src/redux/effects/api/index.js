import axios from 'axios'
import { authRequest, logOutRequest } from './login'
import { userDataRequest } from './users'
import { subscriptionRequest } from './user-subscription'
import { getPlaceRequest } from './places'
import { postReedem } from './redeems'
import { getReviewsRequest, postReview } from './reviews'

const searchReview = query =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

const fetchReward = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

export {
  authRequest,
  fetchReward,
  getPlaceRequest,
  getReviewsRequest,
  logOutRequest,
  postReview,
  subscriptionRequest,
  postReedem,
  searchReview,
  userDataRequest,
}
