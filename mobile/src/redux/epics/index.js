import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { fbAuthRequest } from './signup-epic'
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
  fbAuthRequest,
  shareAppEpic,
)
