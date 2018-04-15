import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/user-subscription/request`,
  FETCH: `${CONFIG.APP_NAME}/user-subscription/fetch`,
  REMOVE: `${CONFIG.APP_NAME}/user-subscription/remove`,
  FULFILLED: `${CONFIG.APP_NAME}/user-subscription/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/user-subscription/rejected`,
})

export const actions = Object.freeze({
  request: payload => ({
    type: ACTIONS.REQUEST,
    payload,
  }),
  fetch: () => ({
    type: ACTIONS.FETCH,
  }),
  remove: () => ({
    type: ACTIONS.REQUEST,
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
  message: '',
  subscriptionId: '',
  status: '',
  price: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST:
    case ACTIONS.FETCH:
    case ACTIONS.REMOVE:
      return { ...state, loading: true }
    case ACTIONS.FULFILLED:
      // @TODO Add status and price after api ready
      return { ...state, subscriptionId: action.payload.id, loading: false }
    case ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }
    default:
      return state
  }
}

export default reducer
