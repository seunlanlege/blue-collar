import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  FULFILLED: `${CONFIG.APP_NAME}/rewards/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/rewards/rejected`,
  REDEEM: `${CONFIG.APP_NAME}/rewards/redeem`,
})

export const actions = Object.freeze({
  redeem: () => ({
    type: ACTIONS.REDEEM,
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
  redeemData: null,
  loading: false,
  errorMessage: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.REDEEM:
      return { ...state, loading: false }
    case ACTIONS.FULFILLED:
      return { ...state, redeemData: action.payload, loading: false }
    case ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }

    default:
      return state
  }
}

export default reducer
