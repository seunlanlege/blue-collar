import { combineReducers } from 'redux'

import example from './example'
import login from './login'
import navigation from './navigation'
import reward from './reward'
import review from './review'
import search from './search'
import user from './users'
import userDataEntry from './user-data-entry'

export default combineReducers({
  example,
  navigation,
  reward,
  review,
  login,
  search,
  user,
  userDataEntry,
})
