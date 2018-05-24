import CONFIG from '../../../config'

import { ACTIONS as USER_ACTIONS } from './users'

export const ACTIONS = Object.freeze({
  CREATE: `${CONFIG.APP_NAME}/subscription/create`,
  REMOVE: `${CONFIG.APP_NAME}/subscription/remove`,
  REJECTED: `${CONFIG.APP_NAME}/subscription/rejected`,
})

export const actions = Object.freeze({
  create: payload => ({
    type: ACTIONS.CREATE,
    payload,
  }),
  remove: () => ({
    type: ACTIONS.REMOVE,
  }),
  rejected: payload => ({
    type: ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  loading: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE:
    case ACTIONS.REMOVE:
      return { ...state, loading: true }
    // Use this action because user object is returned
    case USER_ACTIONS.LOGIN_FULFILLED:
      return { ...state, loading: false }
    case ACTIONS.REJECTED:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default reducer
