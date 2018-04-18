import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/reviews/fetch`,
  FETCH: `${CONFIG.APP_NAME}/reviews/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/reviews/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/reviews/rejected`,
  SELECT: `${CONFIG.APP_NAME}/reviews/select`,
  POST: `${CONFIG.APP_NAME}/reviews/POST`,
  CREATED: `${CONFIG.APP_NAME}/reviews/CREATED`,
})

export const actions = Object.freeze({
  updateField: (field, value) => ({
    type: ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  fetch: () => ({
    type: ACTIONS.FETCH,
  }),
  fulfilled: payload => ({
    type: ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: ACTIONS.REJECTED,
    payload,
  }),
  select: payload => ({
    type: ACTIONS.SELECT,
    payload,
  }),
  post: payload => ({
    type: ACTIONS.POST,
    payload,
  }),
  created: payload => ({
    type: ACTIONS.CREATED,
    payload,
  }),
})

/**
 * Reducer
 */
const initState = {
  loading: false,
  reviews: [],
  errorMessage: '',
  selectedReview: {},
  reviewId: '',

  pocName: '',
  pocType: null,
  comments: '',
  starBidProcess: 0,
  starChangeOrdersAccepted: 0,
  starTimeRespected: 0,
  starJobCompleted: 0,
  starPaymentsSatisfaction: 0,
  starWorkWithAgain: 0,
  boughtMaterials: false,
  otherPartyInvolved: false,
  dollarsLost: '',
  placeId: '',
  name: '',
  vicinity: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case ACTIONS.FETCH:
    case ACTIONS.POST:
      return { ...state, loading: true }
    case ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }
    case ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }
    case ACTIONS.SELECT:
      return { ...state, selectedReview: action.payload }

    case ACTIONS.CREATED:
      return { ...state, reviewId: action.payload.id, loading: false }
    default:
      return state
  }
}

export default reducer
