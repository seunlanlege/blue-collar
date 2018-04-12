import { combineEpics } from 'redux-observable'

import { fetchReviewEpic, searchReviewEpic, postReviewEpic } from './reviews'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
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

  fbAuthRequest,
  fetchReviewEpic,
  fetchRewardEpic,
  getPlaceEpic,
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
