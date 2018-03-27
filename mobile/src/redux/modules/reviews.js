import CONFIG from '../../../config'

export const REVIEW_ACTIONS = Object.freeze({
  FETCH: `${CONFIG.APP_NAME}/review/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/review/rejected`,
  SELECT: `${CONFIG.APP_NAME}/review/select`,
  POST: `${CONFIG.APP_NAME}/review/POST`,
  CREATED: `${CONFIG.APP_NAME}/review/CREATED`,
})

export const reviewActions = Object.freeze({
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
  created: () => ({
    type: REVIEW_ACTIONS.CREATED,
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
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.FETCH:
      return { ...state, loading: true }
    case REVIEW_ACTIONS.FULFILLED:
      console.log('Reviews REducer', action.payload)
      return { ...state, reviews: action.payload, loading: false }
    case REVIEW_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }
    case REVIEW_ACTIONS.SELECT:
      return { ...state, selectedReview: action.payload }
    case REVIEW_ACTIONS.POST:
      return { ...state, loading: true }
    case REVIEW_ACTIONS.CREATED:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default reducer
