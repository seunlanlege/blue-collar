import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { signUpRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'

export default combineEpics(
  fetchReviewEpic,
  fetchRewardEpic,
  redeemPointEpic,
  searchReviewEpic,
  signUpRequest,
)
