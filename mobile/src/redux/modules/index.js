import { combineReducers } from 'redux'

import example from './example'
import login from './login'
import navigation from './navigation'
import reward from './reward'
import review from './review'
import user from './users'
import userDataEntry from './user-data-entry'
import userSubscription from './user-subscription'
import venues from './venues'

export default combineReducers({
  example,
  navigation,
  login,
  reward,
  review,
  user,
  userDataEntry,
  userSubscription,
  venues,
})
