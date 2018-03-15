import { fromJS } from 'immutable'
import CONFIG from '../../../config'

export const LOGIN_ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/login/update-field`,
  REQUEST: `${CONFIG.APP_NAME}/login/request`,
  FULFILLED: `${CONFIG.APP_NAME}/login/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/login/rejected`,
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
})

const initState = fromJS({
  inputField: {
    email: '',
    password: '',
  },
  isLogin: null,
  loading: false,
  message: '',
})

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_FIELD:
      return state.setIn(['inputField', action.field], action.value)
    case LOGIN_ACTIONS.REQUEST:
      return state.set('loading', true)
    case LOGIN_ACTIONS.FULFILLED:
      return state.set('isLogin', true).set('loading', false)
    case LOGIN_ACTIONS.REJECTED:
      return state.set('message', action.payload).set('loading', false)
    default:
      return state
  }
}

export default reducer
