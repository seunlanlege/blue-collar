import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { signUpRequest } from './signup-epic'

export default combineEpics(fetchReviewEpic, searchReviewEpic, signUpRequest)
