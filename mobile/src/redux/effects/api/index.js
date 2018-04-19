import axios from 'axios'
import { authRequest, forgotPassword } from './login'
import { userDataRequest } from './users'
import { getPlaceRequest, placeBid } from './places'
import { postReedem } from './redeems'

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
  forgotPassword,
  fetchReward,
  getPlaceRequest,
  postReedem,
  searchReview,
  userDataRequest,
  placeBid,
}
