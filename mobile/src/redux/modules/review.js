import CONFIG from '../../../config'
// @TODO remove if API ready
const data = require('../../dummy-data/reviews.json')

const cities = [
  { id: 1, place: 'Ngopdul', city: 'bandung' },
  { id: 2, place: 'SS', city: 'Jogja' },
  { id: 3, place: 'Raminten', city: 'SBY' },
]

export const WRITE_REVIEW_ACTIONS = Object.freeze({
  FETCH_REVIEW: `${CONFIG.APP_NAME}/write-review/fetch-review`,
  FULFILLED: `${CONFIG.APP_NAME}/write-review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/write-review/rejected`,
  SEARCH: `${CONFIG.APP_NAME}/write-review/search`,
  SEARCH_FULFILLED: `${CONFIG.APP_NAME}/write-review/search-fulfilled`,
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
  searchReview: payload => ({
    type: WRITE_REVIEW_ACTIONS.SEARCH,
    payload,
  }),
  searchFulfilled: payload => ({
    type: WRITE_REVIEW_ACTIONS.SEARCH_FULFILLED,
    payload: cities,
  }),
})

/**
 * Reducer
 */

const initState = { loading: false, reviews: [], errorMessage: '', cities: [] }

const reducer = (state = initState, action) => {
  switch (action.type) {
    case WRITE_REVIEW_ACTIONS.FETCH_REVIEW:
      return { ...state, loading: true }
    case WRITE_REVIEW_ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }
    case WRITE_REVIEW_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }
    case WRITE_REVIEW_ACTIONS.SEARCH_FULFILLED:
      console.log('REUDCE', action.payload)
      return { ...state, cities: action.payload }
    default:
      return state
  }
}

export default reducer
