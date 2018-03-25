import { combineReducers } from 'redux'

import example from './example'
import login from './login'
import navigation from './navigation'
import paymentDetail from './payment-detail'
import reward from './reward'
import review from './review'
import venues from './venues'
import user from './users'
import userDataEntry from './user-data-entry'

export default combineReducers({
  example,
  navigation,
  paymentDetail,
  reward,
  review,
  login,
  user,
  userDataEntry,
  venues,
})
