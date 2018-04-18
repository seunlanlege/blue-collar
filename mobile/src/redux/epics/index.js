import { combineEpics } from 'redux-observable'

import { fbAuthRequest } from './signup-epic'
import rewards from './rewards'
import { shareAppEpic } from './share'
import places from './places'
import users from './users'
import subscription from './user-subscription'
import { redeemPromoCode } from './promo'

export default combineEpics(
  users,
  places,
  subscription,
  rewards,
  redeemPromoCode,

  fbAuthRequest,
  shareAppEpic,
)
