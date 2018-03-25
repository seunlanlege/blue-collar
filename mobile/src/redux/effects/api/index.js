import axios from 'axios'
import { authRequest, logOutRequest } from './login'
import { searchRequest, getPlaceRequest } from './search'
import { userDataRequest } from './user-data-entry'

const fetchReview = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.data)

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
  fetchReview,
  fetchReward,
  getPlaceRequest,
  logOutRequest,
  redeemPoint,
  searchReview,
  searchRequest,
  userDataRequest,
}
