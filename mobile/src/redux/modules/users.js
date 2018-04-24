import CONFIG from '../../../config'

import { ACTIONS as REWARD_ACTIONS } from './rewards'

export const ACTIONS = Object.freeze({
  LOGIN_FULFILLED: `${CONFIG.APP_NAME}/users/login-fulfilled`,
  LOGIN_REJECTED: `${CONFIG.APP_NAME}/users/login-rejected`,

  LOGIN: `${CONFIG.APP_NAME}/users/login`,
  FB_LOGIN: `${CONFIG.APP_NAME}/users/fb-login`,
  SIGNUP: `${CONFIG.APP_NAME}/users/signup`,

  PLACE_BID: `${CONFIG.APP_NAME}/places/place-bid`,
  BID_FULFILLED: `${CONFIG.APP_NAME}/places/bid-fulfilled`,

  LOGOUT: `${CONFIG.APP_NAME}/users/logout`,
  LOGOUT_FULFILLED: `${CONFIG.APP_NAME}/users/logout-fulfilled`,
  LOGOUT_REJECTED: `${CONFIG.APP_NAME}/users/logout-rejected`,
})

export const actions = Object.freeze({
  login: payload => ({ type: ACTIONS.LOGIN, payload }),
  fbLogin: payload => ({ type: ACTIONS.FB_LOGIN, payload }),
  loginFulfilled: payload => ({ type: ACTIONS.LOGIN_FULFILLED, payload }),
  loginRejected: payload => ({ type: ACTIONS.LOGIN_REJECTED, payload }),
  signup: payload => ({ type: ACTIONS.SIGNUP, payload }),

  bid: () => ({ type: ACTIONS.PLACE_BID }),
  bidFulfilled: payload => ({ type: ACTIONS.BID_FULFILLED, payload }),

  logout: payload => ({ type: ACTIONS.LOGOUT, payload }),
  logoutFulfilled: payload => ({ type: ACTIONS.LOGOUT_FULFILLED, payload }),
  logoutRejected: payload => ({ type: ACTIONS.LOGOUT_REJECTED, payload }),
})

const initState = {
  authHeaders: null,
  id: null,
  email: null,
  referralCode: null,

  firstName: null,
  lastName: null,
  trade: null,
  contactable: null,
  placeId: null,
  jobPosition: null,
  activeBids: [],
  subscription: null,
  rewards: {
    lifetimePoints: 0,
    availablePoints: 0,
  },

  // TODO: Handle this with redux-form. This is a hack.
  loading: false,
  message: null,
}

const reducer = (state = initState, action) => {
  const { payload } = action

  switch (action.type) {
    case ACTIONS.LOGIN:
    case ACTIONS.SIGNUP:
    case ACTIONS.LOGOUT:
      return { ...state, loading: true }

    case REWARD_ACTIONS.FULFILLED:
    case ACTIONS.LOGIN_FULFILLED:
      return {
        ...state,
        ...payload,

        loading: false,
      }

    case ACTIONS.BID_FULFILLED:
      return { ...state, activeBids: [{ ...action.payload }], loading: false }

    case ACTIONS.LOGOUT_FULFILLED:
      return initState

    case ACTIONS.LOGOUT_REJECTED:
    case ACTIONS.LOGIN_REJECTED:
      return { ...state, message: payload.message, loading: false }

    default:
      return state
  }
}

export default reducer
