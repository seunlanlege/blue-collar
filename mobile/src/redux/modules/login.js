import CONFIG from '../../../config'

export const LOGIN_ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/login/update-field`,
  FACEBOOK_AUTH: `${CONFIG.APP_NAME}/login/facebook-auth`,
  FULFILLED: `${CONFIG.APP_NAME}/login/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/login/rejected`,
  LOGOUT_REQUEST: `${CONFIG.APP_NAME}/logout-request`,
  LOGOUT: `${CONFIG.APP_NAME}/logout`,
  FORGOT_PASSWORD: `${CONFIG.APP_NAME}/forgot-password`,
})

export const logInActions = Object.freeze({
  updateField: (field, value) => ({
    type: LOGIN_ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  facebookAuth: () => ({
    type: LOGIN_ACTIONS.FACEBOOK_AUTH,
  }),
  fulfilled: () => ({
    type: LOGIN_ACTIONS.FULFILLED,
  }),
  rejected: payload => ({
    type: LOGIN_ACTIONS.REJECTED,
    payload,
  }),
  logOutRequest: () => ({
    type: LOGIN_ACTIONS.LOGOUT_REQUEST,
  }),
  logout: () => ({
    type: LOGIN_ACTIONS.LOGOUT,
  }),
  forgotPassword: payload => ({
    type: LOGIN_ACTIONS.FORGOT_PASSWORD,
    payload,
  }),
})

const initState = {
  loading: false, // This is not used! TODO: clean this up.
  message: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        inputField: { ...state.inputField, [action.field]: action.value },
      }
    case LOGIN_ACTIONS.FACEBOOK_AUTH:
    case LOGIN_ACTIONS.FORGOT_PASSWORD:
      return { ...state, loading: true }

    case LOGIN_ACTIONS.FULFILLED:
      return { ...state, loading: false }

    case LOGIN_ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }

    case LOGIN_ACTIONS.LOGOUT:
      return state

    default:
      return state
  }
}

export default reducer
