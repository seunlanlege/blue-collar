import { combineEpics } from 'redux-observable'

import reviews from './reviews'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { shareAppEpic } from './share'
import places from './places'
import users from './users'
import subscription from './user-subscription'
import { redeemPromoCodeEpic } from './redeems'

export default combineEpics(
  users,
  places,
  subscription,
  reviews,

  fbAuthRequest,
  fetchRewardEpic,
  redeemPointEpic,
  redeemPromoCodeEpic,
  shareAppEpic,
)
