import { combineEpics } from 'redux-observable'

import { fbAuthRequest } from './signup-epic'
import rewards from './rewards'
import { shareAppEpic } from './share'
import { redeemPromoCode } from './promo'

import places from './places'
import reviews from './reviews'
import subscription from './user-subscription'
import users from './users'

export default combineEpics(
  places,
  reviews,
  subscription,
  users,

  rewards,
  redeemPromoCode,
  fbAuthRequest,
  shareAppEpic,
)
