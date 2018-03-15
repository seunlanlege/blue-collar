import { combineReducers } from 'redux'

import example from './example'
import navigation from './navigation'
import reward from './reward'
import review from './review'
import login from './login'

export default combineReducers({ example, navigation, reward, review, login })
