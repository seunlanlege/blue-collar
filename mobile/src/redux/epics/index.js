import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { signUpRequest } from './signup-epic'
import { fetchRewardEpic } from './reward-epic'

export default combineEpics(
  fetchReviewEpic,
  fetchRewardEpic,
  searchReviewEpic,
  signUpRequest,
)
