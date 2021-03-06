import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  FULFILLED: `${CONFIG.APP_NAME}/rewards/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/rewards/rejected`,
  REDEEM: `${CONFIG.APP_NAME}/rewards/redeem`,
})

export const actions = Object.freeze({
  redeem: payload => ({
    type: ACTIONS.REDEEM,
    payload,
  }),
  fulfilled: payload => ({
    type: ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  loading: false,
  errorMessage: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.REDEEM:
      return { ...state, loading: true }

    case ACTIONS.FULFILLED:
      return { ...state, loading: false }

    case ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }

    default:
      return state
  }
}

export default reducer
