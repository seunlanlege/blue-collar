import { combineEpics } from 'redux-observable'

import { fetchReviewEpic, searchReviewEpic, postReviewEpic } from './reviews'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { shareAppEpic } from './share'
import places from './places'
import users from './users'
import {
  subscriptionEpic,
  getSubscriptionEpic,
  subscriptionRemoveEpic,
} from './user-subscription'
import { redeemPromoCodeEpic } from './redeems'

export default combineEpics(
  users,
  places,

  fbAuthRequest,
  fetchReviewEpic,
  fetchRewardEpic,
  postReviewEpic,
  redeemPointEpic,
  redeemPromoCodeEpic,
  searchReviewEpic,
  shareAppEpic,
  subscriptionEpic,
  subscriptionRemoveEpic,
  getSubscriptionEpic,
)
