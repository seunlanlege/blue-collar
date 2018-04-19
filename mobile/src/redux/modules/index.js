import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import example from './example'
import login from './login'
import modals from './modals'
import places from './places'
import promo from './promo'
import rewards from './rewards'
import reviews from './reviews'
import users from './users'
import userDataEntry from './user-data-entry'
import userSubscription from './user-subscription'

export default combineReducers({
  example,
  form: formReducer,
  modals,
  login,
  places,
  promo,
  rewards,
  reviews,
  users,
  userDataEntry,
  userSubscription,
})
