import CONFIG from '../../../config'

export const PLACE_REVIEW_ACTIONS = Object.freeze({
  FETCH_PLACE: `${CONFIG.APP_NAME}/venue-reviews/fetch-place`,
  FULFILLED: `${CONFIG.APP_NAME}/venue-reviews/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/venue-reviews/rejected`,
})

export const venueReviewActions = Object.freeze({
  fetchPlace: (lat, long, query) => ({
    type: PLACE_REVIEW_ACTIONS.FETCH_PLACE,
    lat,
    long,
    query,
  }),
  fulfilled: payload => ({
    type: PLACE_REVIEW_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: PLACE_REVIEW_ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  loading: false,
  results: [],
  message: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case PLACE_REVIEW_ACTIONS.FETCH_PLACE:
      return { ...state, loading: true }
    case PLACE_REVIEW_ACTIONS.FULFILLED:
      return { ...state, results: action.payload }
    case PLACE_REVIEW_ACTIONS.REJECTED:
      return { ...state, results: [], message: action.payload }

    default:
      return state
  }
}

export default reducer
