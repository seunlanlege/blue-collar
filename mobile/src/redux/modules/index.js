import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import example from './example'
import login from './login'
import navigation from './navigation'
import places from './places'
import redeems from './redeems'
import reward from './reward'
import reviews from './reviews'
import users from './users'
import userDataEntry from './user-data-entry'
import userSubscription from './user-subscription'

export default combineReducers({
  example,
  form: formReducer,
  navigation,
  login,
  places,
  redeems,
  reward,
  reviews,
  users,
  userDataEntry,
  userSubscription,
})
