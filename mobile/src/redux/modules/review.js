import CONFIG from '../../../config'

export const WRITE_REVIEW_ACTIONS = Object.freeze({
  IS_LOADING: `${CONFIG.APP_NAME}/write-review/isLoading`,
  FETCH_REVIEW: `${CONFIG.APP_NAME}/write-review/fetchReview`,
  FULFILLED: `${CONFIG.APP_NAME}/write-review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/write-review/rejected`,
})

export const writeReviewActions = Object.freeze({
  isLoading: status => ({ type: WRITE_REVIEW_ACTIONS.IS_LOADING, status }),
  fetchReview: () => ({
    type: WRITE_REVIEW_ACTIONS.FETCH_REVIEW,
  }),
  fetchReviewFulfilled: payload => ({
    type: WRITE_REVIEW_ACTIONS.FULFILLED,
    payload,
  }),
  fetchReviewRejected: payload => ({
    type: WRITE_REVIEW_ACTIONS.REJECTED,
    payload,
  }),
})

/**
 * Reducer
 */

const initState = { loading: true, reviews: [], errorMessage: '' }

const reducer = (state = initState, action) => {
  switch (action.type) {
    case WRITE_REVIEW_ACTIONS.IS_LOADING:
      return { ...state, loading: action.status }
    case WRITE_REVIEW_ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload }
    case WRITE_REVIEW_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

export default reducer
