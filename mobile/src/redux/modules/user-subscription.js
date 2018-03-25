import CONFIG from '../../../config'

export const SUBSCRIPTION_ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/user-subscription/update-field`,
  REQUEST: `${CONFIG.APP_NAME}/user-subscription/request`,
  FULFILLED: `${CONFIG.APP_NAME}/user-subscription/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/user-subscription/rejected`,
})

export const subscriptionActions = Object.freeze({
  updateField: (field, value) => ({
    type: SUBSCRIPTION_ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  request: () => ({
    type: SUBSCRIPTION_ACTIONS.REQUEST,
  }),
  fulfilled: payload => ({
    type: SUBSCRIPTION_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: SUBSCRIPTION_ACTIONS.REJECTED,
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
    case SUBSCRIPTION_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case SUBSCRIPTION_ACTIONS.REQUEST:
      return { ...state, loading: true }
    case SUBSCRIPTION_ACTIONS.FULFILLED:
      return { ...state, subscriptionId: action.payload.id, loading: false }
    case SUBSCRIPTION_ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }
    default:
      return state
  }
}

export default reducer
