import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  FULFILLED: `${CONFIG.APP_NAME}/login/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/login/rejected`,
  LOGOUT_REQUEST: `${CONFIG.APP_NAME}/logout-request`,
  LOGOUT: `${CONFIG.APP_NAME}/logout`,
  FORGOT_PASSWORD: `${CONFIG.APP_NAME}/forgot-password`,
})

export const actions = Object.freeze({
  fulfilled: () => ({
    type: ACTIONS.FULFILLED,
  }),
  rejected: payload => ({
    type: ACTIONS.REJECTED,
    payload,
  }),
  forgotPassword: payload => ({
    type: ACTIONS.FORGOT_PASSWORD,
    payload,
  }),
})

const initState = {
  loading: false, // This is not used! TODO: clean this up.
  message: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.FORGOT_PASSWORD:
      return { ...state, loading: true }

    case ACTIONS.FULFILLED:
      return { ...state, loading: false }

    case ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }

    case ACTIONS.LOGOUT:
      return state

    default:
      return state
  }
}

export default reducer
