import CONFIG from '../../../config'
// @TODO remove if API ready
const data = require('../../dummy-data/reviews.json')

export const WRITE_REVIEW_ACTIONS = Object.freeze({
  FETCH_REVIEW: `${CONFIG.APP_NAME}/write-review/fetch-review`,
  FULFILLED: `${CONFIG.APP_NAME}/write-review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/write-review/rejected`,
  SELECT_REVIEW: `${CONFIG.APP_NAME}/review/select-review`,
})

export const writeReviewActions = Object.freeze({
  fetchReview: () => ({
    type: WRITE_REVIEW_ACTIONS.FETCH_REVIEW,
  }),
  fetchReviewFulfilled: payload => ({
    type: WRITE_REVIEW_ACTIONS.FULFILLED,
    payload: data,
  }),
  fetchReviewRejected: payload => ({
    type: WRITE_REVIEW_ACTIONS.REJECTED,
    payload,
  }),
  selectReview: payload => ({
    type: WRITE_REVIEW_ACTIONS.SELECT_REVIEW,
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
    case WRITE_REVIEW_ACTIONS.FETCH_REVIEW:
      return { ...state, loading: true }
    case WRITE_REVIEW_ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }
    case WRITE_REVIEW_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }
    case WRITE_REVIEW_ACTIONS.SELECT_REVIEW:
      return { ...state, selectedReview: action.payload }
    default:
      return state
  }
}

export default reducer
