import { fromJS } from 'immutable'
import CONFIG from '../../../config'
// @TODO remove if API ready
const data = require('../../dummy-data/reviews.json')

const cities = [
  { id: 1, place: '143 Atlantic Ave', city: 'Marbledhead, MA' },
  { id: 2, place: '143 Averton', city: 'Marbledhead, MA' },
  { id: 3, place: '143 Anty Hill', city: 'Boston, MA' },
  { id: 4, place: '143 Aviation Bldv', city: 'Newton, MA' },
  { id: 5, place: '143 Apex Street', city: 'Township, PA' },
]

export const WRITE_REVIEW_ACTIONS = Object.freeze({
  FETCH_REVIEW: `${CONFIG.APP_NAME}/write-review/fetch-review`,
  FULFILLED: `${CONFIG.APP_NAME}/write-review/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/write-review/rejected`,
  SEARCH: `${CONFIG.APP_NAME}/write-review/search`,
  SEARCH_FULFILLED: `${CONFIG.APP_NAME}/write-review/search-fulfilled`,
  SEARCH_REJECTED: `${CONFIG.APP_NAME}/write-review/search-rejected`,
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
  searchReview: payload => ({
    type: WRITE_REVIEW_ACTIONS.SEARCH,
    payload,
  }),
  searchFulfilled: payload => ({
    type: WRITE_REVIEW_ACTIONS.SEARCH_FULFILLED,
    payload: cities,
  }),
  selectReview: payload => ({
    type: WRITE_REVIEW_ACTIONS.SELECT_REVIEW,
    payload,
  }),
  // @TODO this only temporary until api ready
  searchRejected: payload => ({
    type: WRITE_REVIEW_ACTIONS.SEARCH_REJECTED,
    payload: [],
  }),
})

/**
 * Reducer
 */
const initState = fromJS({
  loading: false,
  reviews: [],
  errorMessage: '',
  selectedReview: {},
  cities: [],
})

const reducer = (state = initState, action) => {
  switch (action.type) {
    case WRITE_REVIEW_ACTIONS.FETCH_REVIEW:
      return state.set('loading', true)
    case WRITE_REVIEW_ACTIONS.FULFILLED:
      return state.set('reviews', action.payload).set('loading', false)
    case WRITE_REVIEW_ACTIONS.REJECTED:
      return state.set('errorMessage', action.payload).set('loading', false)
    case WRITE_REVIEW_ACTIONS.SEARCH_FULFILLED:
      return state.set('cities', action.payload)
    case WRITE_REVIEW_ACTIONS.SELECT_REVIEW:
      return state.set('selectedReview', action.payload)
    case WRITE_REVIEW_ACTIONS.SEARCH_REJECTED:
      return state.set('cities', action.payload)
    default:
      return state
  }
}

export default reducer
