import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  REDEEM: `${CONFIG.APP_NAME}/redeems/redeem`,
  FULFILLED: `${CONFIG.APP_NAME}/redeems/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/redeems/rejected`,
})

export const actions = Object.freeze({
  request: payload => ({
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
  promoCode: null,
  results: null,
  message: null,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.REDEEM:
      return { ...state, loading: true }
    case ACTIONS.FULFILLED:
      return { ...state, results: action.payload, loading: false }
    case ACTIONS.REJECTED:
      return {
        ...state,
        message: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default reducer
