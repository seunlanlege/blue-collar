import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/reviews/fetch`,
  FETCH: `${CONFIG.APP_NAME}/reviews/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/reviews/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/reviews/rejected`,
  SELECT: `${CONFIG.APP_NAME}/reviews/select`,
  POST: `${CONFIG.APP_NAME}/reviews/POST`,
  CREATED: `${CONFIG.APP_NAME}/reviews/CREATED`,

  GET_RECENT: `${CONFIG.APP_NAME}/reviews/get-recent`,
  GET_RECENT_FULFILLED: `${CONFIG.APP_NAME}/reviews/get-recent-fulfilled`,
  GET_RECENT_REJECTED: `${CONFIG.APP_NAME}/reviews/get-recent-rejected`,
})

export const actions = Object.freeze({
  updateField: (field, value) => ({
    type: ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  fetch: placeId => ({
    type: ACTIONS.FETCH,
    placeId,
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

  getRecent: () => ({ type: ACTIONS.GET_RECENT }),
  getRecentFulfilled: ({ reviews, places }) => ({ type: ACTIONS.GET_RECENT }),
  getRecentRejected: () => ({ type: ACTIONS.GET_RECENT }),
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
  recentReviews: {
    reviews: [],
    places: {}, // keys are the id.
  },

  pocType: null,
  placeId: '',
  name: '',
  vicinity: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }

    case ACTIONS.FETCH:
    case ACTIONS.GET_RECENT:
    case ACTIONS.POST:
      return { ...state, loading: true }

    case ACTIONS.GET_RECENT_REJECTED:
      return state
    case ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }

    case ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }

    case ACTIONS.SELECT:
      return { ...state, selectedReview: action.payload }

    case ACTIONS.CREATED:
      return { ...state, reviewId: action.payload.id, loading: false }

    case ACTIONS.GET_RECENT_FULFILLED:
      return { ...state, recentReviews: action.payload }

    default:
      return state
  }
}

export default reducer
