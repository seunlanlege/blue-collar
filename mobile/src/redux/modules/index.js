import { combineReducers } from 'redux'

import example from './example'
import login from './login'
import navigation from './navigation'
import places from './places'
import reward from './reward'
import reviews from './reviews'
import users from './users'
import userDataEntry from './user-data-entry'
import userSubscription from './user-subscription'

export default combineReducers({
  example,
  navigation,
  login,
  places,
  reward,
  reviews,
  users,
  userDataEntry,
  userSubscription,
})
