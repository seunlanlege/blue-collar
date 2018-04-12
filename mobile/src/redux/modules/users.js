import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  LOGIN: `${CONFIG.APP_NAME}/users/login`,
  SIGNUP: `${CONFIG.APP_NAME}/users/signup`,
  LOGIN_FULFILLED: `${CONFIG.APP_NAME}/users/login-fulfilled`,
  LOGIN_REJECTED: `${CONFIG.APP_NAME}/users/login-rejected`,
})

export const actions = Object.freeze({
  login: payload => ({ type: ACTIONS.LOGIN, payload }),
  signup: payload => ({ type: ACTIONS.SIGNUP, payload }),
  loginFulfilled: payload => ({ type: ACTIONS.LOGIN_FULFILLED, payload }),
  loginRejected: payload => ({ type: ACTIONS.LOGIN_REJECTED, payload }),
})

const initState = {
  authHeaders: null,
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  trade: null,
  contactable: null,
  jobPosition: null,

  // TODO: Handle this with redux-form. This is a hack.
  loading: false,
}

const reducer = (state = initState, action) => {
  const { payload } = action

  switch (action.type) {
    case ACTIONS.LOGIN:
    case ACTIONS.SIGNUP:
      return { ...state, loading: true }

    case ACTIONS.LOGIN_FULFILLED:
      return {
        ...state,
        authHeaders: payload.authHeaders,
        id: payload.id,
        email: payload.email,
        referralCode: payload.referralCode,

        loading: false,
      }

    case ACTIONS.LOGIN_REJECTED:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default reducer
