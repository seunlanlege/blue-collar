import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { authRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'
import { searchRequestEpic, getPlaceRequestEpic } from './venues'
import { proceedUserDataEpic } from './users'
import { subscriptionEpic } from './user-subscription'

export default combineEpics(
  authRequestEpic,
  fbAuthRequest,
  fetchReviewEpic,
  fetchRewardEpic,
  getPlaceRequestEpic,
  logOutRequestEpic,
  proceedUserDataEpic,
  redeemPointEpic,
  searchRequestEpic,
  searchReviewEpic,
  shareAppEpic,
  subscriptionEpic,
)
