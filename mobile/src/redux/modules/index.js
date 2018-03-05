import { combineReducers } from 'redux'

import example from './example'
import navigation from './navigation'
import review from './review'
import signup from './signup'

export default combineReducers({ example, navigation, review, signup })
