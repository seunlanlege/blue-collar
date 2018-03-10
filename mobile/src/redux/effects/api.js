import axios from 'axios'

export const fetchReview = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.data)

export const searchReview = query =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)

export const fetchReward = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
