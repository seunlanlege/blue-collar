import { combineEpics } from 'redux-observable'
import { fetchReviewEpic } from './review-epic'
import { signUpRequest } from './signup-epic'

export default combineEpics(fetchReviewEpic, signUpRequest)
