import CONFIG from '../../../config'
// @TODO remove if API ready
const data = require('../../dummy-data/reviews.json')

export const REVIEW_ACTIONS = Object.freeze({
  FETCH: `${CONFIG.APP_NAME}/review/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/review/rejected`,
  SELECT: `${CONFIG.APP_NAME}/review/select`,
})

export const reviewActions = Object.freeze({
  fetch: () => ({
    type: REVIEW_ACTIONS.FETCH,
  }),
  fulfilled: payload => ({
    type: REVIEW_ACTIONS.FULFILLED,
    payload: data,
  }),
  rejected: payload => ({
    type: REVIEW_ACTIONS.REJECTED,
    payload,
  }),
  select: payload => ({
    type: REVIEW_ACTIONS.SELECT,
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
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.FETCH:
      return { ...state, loading: true }
    case REVIEW_ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }
    case REVIEW_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }
    case REVIEW_ACTIONS.SELECT:
      return { ...state, selectedReview: action.payload }
    default:
      return state
  }
}

export default reducer
