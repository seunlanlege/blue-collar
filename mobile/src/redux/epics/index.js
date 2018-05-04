import { combineEpics } from 'redux-observable'

import { fbAuthRequest } from './signup-epic'
import rewards from './rewards'
import { shareAppEpic } from './share'
import { redeemPromoCode } from './promo'

import facebook from './facebook'
import places from './places'
import reviews from './reviews'
import subscriptions from './subscriptions'
import users from './users'

export default combineEpics(
  facebook,
  places,
  reviews,
  subscriptions,
  users,

  rewards,
  redeemPromoCode,
  fbAuthRequest,
  shareAppEpic,
)
