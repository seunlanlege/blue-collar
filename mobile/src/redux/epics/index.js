import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic, postReviewEpic } from './reviews'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { authRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'
import { searchPlaceEpic, getPlaceEpic } from './places'
import { proceedUserDataEpic } from './users'
import { subscriptionEpic } from './user-subscription'

export default combineEpics(
  authRequestEpic,
  fbAuthRequest,
  fetchReviewEpic,
  fetchRewardEpic,
  getPlaceEpic,
  logOutRequestEpic,
  postReviewEpic,
  proceedUserDataEpic,
  redeemPointEpic,
  searchPlaceEpic,
  searchReviewEpic,
  shareAppEpic,
  subscriptionEpic,
)
