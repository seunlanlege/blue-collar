import { combineEpics } from 'redux-observable'
import { fetchReviewEpic } from '../effects/reviews-fx'

export default combineEpics(fetchReviewEpic)
