import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  FETCH: `${CONFIG.APP_NAME}/reviews/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/reviews/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/reviews/rejected`,
  SELECT: `${CONFIG.APP_NAME}/reviews/select`,
  POST: `${CONFIG.APP_NAME}/reviews/post`,
  CREATED: `${CONFIG.APP_NAME}/reviews/created`,

  GET_USER: `${CONFIG.APP_NAME}/reviews/get-user`,
  GET_USER_FULFILLED: `${CONFIG.APP_NAME}/reviews/get-user-fulfilled`,

  GET_RECENT: `${CONFIG.APP_NAME}/reviews/get-recent`,
  GET_RECENT_FULFILLED: `${CONFIG.APP_NAME}/reviews/get-recent-fulfilled`,
  GET_RECENT_REJECTED: `${CONFIG.APP_NAME}/reviews/get-recent-rejected`,

  CLEAR_REVIEW_ID: `${CONFIG.APP_NAME}/reviews/clear-review-id`,
})

export const actions = Object.freeze({
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

  getUser: userId => ({
    type: ACTIONS.GET_USER,
    userId,
  }),
  getUserFulfilled: payload => ({
    type: ACTIONS.GET_USER_FULFILLED,
    payload,
  }),

  getRecent: () => ({ type: ACTIONS.GET_RECENT }),
  getRecentFulfilled: payload => ({
    type: ACTIONS.GET_RECENT_FULFILLED,
    payload,
  }),
  getRecentRejected: () => ({ type: ACTIONS.GET_RECENT_REJECTED }),
  clearReviewId: () => ({ type: ACTIONS.CLEAR_REVIEW_ID }),
})

/**
 * Reducer
 */
const initState = {
  loading: false,
  reviews: [],
  selectedReview: {},
  reviewId: null,
  recentReviews: {
    reviews: [],
    places: {}, // keys are the id.
    users: {},
  },
  user: null, // this for reviewer
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH:
    case ACTIONS.GET_RECENT:
    case ACTIONS.POST:
    case ACTIONS.GET_USER:
      return { ...state, loading: true }

    case ACTIONS.GET_RECENT_REJECTED:
      return { ...state, loading: false }
    case ACTIONS.FULFILLED:
      return { ...state, reviews: action.payload, loading: false }

    case ACTIONS.REJECTED:
      return { ...state, loading: false }

    case ACTIONS.SELECT:
      return { ...state, selectedReview: action.payload }

    case ACTIONS.CREATED:
      return { ...state, reviewId: action.payload.id, loading: false }

    case ACTIONS.GET_RECENT_FULFILLED:
      return { ...state, recentReviews: action.payload, loading: false }

    case ACTIONS.GET_USER_FULFILLED:
      return { ...state, user: action.payload, loading: false }

    case ACTIONS.CLEAR_REVIEW_ID:
      return { ...state, reviewId: null }
    default:
      return state
  }
}

export default reducer
