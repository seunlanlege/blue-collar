import { combineEpics } from 'redux-observable'

import { fetchReviewEpic, searchReviewEpic, postReviewEpic } from './reviews'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { authRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'
import { searchPlaceEpic, getPlaceEpic } from './places'
import users, { proceedUserDataEpic } from './users'
import {
  subscriptionEpic,
  getSubscriptionEpic,
  subscriptionRemoveEpic,
} from './user-subscription'
import { redeemPromoCodeEpic } from './redeems'

export default combineEpics(
  users,

  authRequestEpic,
  fbAuthRequest,
  fetchReviewEpic,
  fetchRewardEpic,
  getPlaceEpic,
  logOutRequestEpic,
  postReviewEpic,
  proceedUserDataEpic,
  redeemPointEpic,
  redeemPromoCodeEpic,
  searchPlaceEpic,
  searchReviewEpic,
  shareAppEpic,
  subscriptionEpic,
  subscriptionRemoveEpic,
  getSubscriptionEpic,
)
