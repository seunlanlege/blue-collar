import axios from 'axios'
import { authRequest, logOutRequest } from './login'
import { userDataRequest } from './users'
import {
  subscriptionRequest,
  getSubscription,
  subscriptionRemove,
} from './user-subscription'
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
  getSubscription,
  logOutRequest,
  postReview,
  subscriptionRequest,
  subscriptionRemove,
  postReedem,
  searchReview,
  userDataRequest,
}
