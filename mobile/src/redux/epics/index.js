import { combineEpics } from 'redux-observable'
import { fetchReviewEpic } from './review-epic'

export default combineEpics(fetchReviewEpic)
