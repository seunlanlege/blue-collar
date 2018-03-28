import CONFIG from '../../../config'

export const REVIEW_ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/review/fetch`,
  FETCH: `${CONFIG.APP_NAME}/review/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/review/rejected`,
  SELECT: `${CONFIG.APP_NAME}/review/select`,
  POST: `${CONFIG.APP_NAME}/review/POST`,
  CREATED: `${CONFIG.APP_NAME}/review/CREATED`,
})

export const reviewActions = Object.freeze({
  updateField: (field, value) => ({
    type: REVIEW_ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  fetch: () => ({
    type: REVIEW_ACTIONS.FETCH,
  }),
  fulfilled: payload => ({
    type: REVIEW_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: REVIEW_ACTIONS.REJECTED,
    payload,
  }),
  select: payload => ({
    type: REVIEW_ACTIONS.SELECT,
    payload,
  }),
  post: () => ({
    type: REVIEW_ACTIONS.POST,
  }),
  created: payload => ({
    type: REVIEW_ACTIONS.CREATED,
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
  clientName: '',
  pointOfContactType: null,
  comments: '',
  startBidProcess: 0,
  starChangeOrdersAccepted: 0,
  starTimeRespected: 0,
  starJobCompleted: 0,
  startPaymentSaticfaction: 0,
  starWorkWithAgain: 0,
  boughtMaterial: false,
  otherPartyInvolved: false,
  dollarsLost: '',
  googlePlaceId: '',
  name: '',
  vicinity: '',
  reviewId: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case REVIEW_ACTIONS.FETCH:
      return { ...state, loading: true }
    case REVIEW_ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }
    case REVIEW_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }
    case REVIEW_ACTIONS.SELECT:
      return { ...state, selectedReview: action.payload }
    case REVIEW_ACTIONS.POST:
      return { ...state, loading: true }
    case REVIEW_ACTIONS.CREATED:
      return { ...state, reviewId: action.payload.id, loading: false }
    default:
      return state
  }
}

export default reducer
