import axios from 'axios'
import { logInRequest, logOutRequest } from './login'

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
  fetchReview,
  fetchReward,
  logInRequest,
  logOutRequest,
  redeemPoint,
  searchReview,
}