import { fromJS } from 'immutable'
import CONFIG from '../../../config'

export const USERS_ACTIONS = Object.freeze({
  STORE: `${CONFIG.APP_NAME}/users/store`,
})

export const userActions = Object.freeze({
  store: payload => ({
    type: USERS_ACTIONS.STORE,
    payload,
  }),
})

const initState = fromJS({ userData: null })

const reducer = (state = initState, action) => {
  switch (action.type) {
    case USERS_ACTIONS.STORE:
      return state.set('userData', action.payload)
    default:
      return state
  }
}

export default reducer
