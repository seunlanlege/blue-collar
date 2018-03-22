import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
// import { signUpRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { authRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'

export default combineEpics(
  fetchReviewEpic,
  fetchRewardEpic,
  authRequestEpic,
  logOutRequestEpic,
  redeemPointEpic,
  searchReviewEpic,
  shareAppEpic,
)
