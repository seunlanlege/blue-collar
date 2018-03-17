import CONFIG from '../../../config'

export const LOGIN_ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/login/update-field`,
  REQUEST: `${CONFIG.APP_NAME}/login/request`,
  FULFILLED: `${CONFIG.APP_NAME}/login/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/login/rejected`,
  LOGOUT_REQUEST: `${CONFIG.APP_NAME}/logout-request`,
  LOGOUT: `${CONFIG.APP_NAME}/logout`,
})

export const logInActions = Object.freeze({
  updateField: (field, value) => ({
    type: LOGIN_ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  request: payload => ({
    type: LOGIN_ACTIONS.REQUEST,
    payload,
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
})

const initState = {
  inputField: {
    email: '',
    password: '',
  },
  loading: false,
  message: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        inputField: { ...state.inputField, [action.field]: action.value },
      }
    case LOGIN_ACTIONS.REQUEST:
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
