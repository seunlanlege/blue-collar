import Axios from 'axios'

export const fetchReview = () =>
  Axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
    response => response.data,
  )
