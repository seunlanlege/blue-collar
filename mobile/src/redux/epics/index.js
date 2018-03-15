import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
// import { signUpRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { logInRequestEpic } from './login'

export default combineEpics(
  fetchReviewEpic,
  fetchRewardEpic,
  redeemPointEpic,
  searchReviewEpic,
  logInRequestEpic,
)
