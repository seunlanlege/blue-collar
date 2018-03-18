import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
// import { signUpRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { logInRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'

export default combineEpics(
  fetchReviewEpic,
  fetchRewardEpic,
  logInRequestEpic,
  logOutRequestEpic,
  redeemPointEpic,
  searchReviewEpic,
  shareAppEpic,
)
