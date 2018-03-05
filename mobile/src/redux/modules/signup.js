import CONFIG from '../../../config'

export const SIGNUP_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/signup/request`,
  FULFILLED: `${CONFIG.APP_NAME}/signup/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/signup/rejected`,
})

export const signUpActions = Object.freeze({
  request: payload => ({
    type: SIGNUP_ACTIONS.REQUEST,
    payload,
  }),
  fulfilled: payload => ({
    type: SIGNUP_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: SIGNUP_ACTIONS.REJECTED,
    payload,
  }),
})

const initState = { userData: null, loading: false, message: '' }

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_ACTIONS.REQUEST:
      return { ...state, loading: true }
    case SIGNUP_ACTIONS.FULFILLED:
      return { ...state, userData: action.payload, loading: false }
    case SIGNUP_ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }
    default:
      return state
  }
}

export default reducer
