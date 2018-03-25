import CONFIG from '../../../config'

import { LOGIN_ACTIONS } from './login'

export const PAYMENT_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/payment-detail/request`,
  FULFILLED: `${CONFIG.APP_NAME}/payment-detail/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/payment-detail/rejected`,
})

export const paymentActions = Object.freeze({
  request: () => ({
    type: PAYMENT_ACTIONS.REQUEST,
  }),
  fulfilled: payload => ({
    type: PAYMENT_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: PAYMENT_ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  loading: false,
  cardNumber: '',
  cardHolderName: '',
  expirationDate: '',
  cvv: '',
  message: '',
  subscriptionId: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case PAYMENT_ACTIONS.REQUEST:
      return { ...state, loading: true }
    case PAYMENT_ACTIONS.FULFILLED:
      return { ...state, subscriptionId: action.payload.id, loading: false }
    case PAYMENT_ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }
    default:
      return state
  }
}

export default reducer
