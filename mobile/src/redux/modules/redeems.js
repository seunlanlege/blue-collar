import CONFIG from '../../../config'

export const REDEEM_ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/redeems/update-field`,
  REQUEST: `${CONFIG.APP_NAME}/redeems/request`,
  FULFILLED: `${CONFIG.APP_NAME}/redeems/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/redeems/rejected`,
})

export const redeemActions = Object.freeze({
  updateField: value => ({
    type: REDEEM_ACTIONS.UPDATE_FIELD,
    value,
  }),
  request: (lat, long, query) => ({
    type: REDEEM_ACTIONS.REQUEST,
  }),
  fulfilled: payload => ({
    type: REDEEM_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: REDEEM_ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  loading: false,
  promoCode: '',
  results: null,
  message: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REDEEM_ACTIONS.UPDATE_FIELD:
      return { ...state, promoCode: action.value }
    case REDEEM_ACTIONS.REQUEST:
      return { ...state, loading: true }
    case REDEEM_ACTIONS.FULFILLED:
      return { ...state, results: action.payload, loading: false }
    case REDEEM_ACTIONS.REJECTED:
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
