import { combineReducers } from 'redux'

import example from './example'
import login from './login'
import navigation from './navigation'
import reward from './reward'
import review from './review'
import users from './users'

export default combineReducers({
  example,
  navigation,
  reward,
  review,
  login,
  users,
})
