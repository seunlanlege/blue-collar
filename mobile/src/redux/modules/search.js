import CONFIG from '../../../config'

export const SEARCH_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/search/request`,
  FULFILLED: `${CONFIG.APP_NAME}/search/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/search/rejected`,
  GET_PLACE: `${CONFIG.APP_NAME}/search/get-place`,
})

export const searchActions = Object.freeze({
  request: (lat, long, query) => ({
    type: SEARCH_ACTIONS.REQUEST,
    lat,
    long,
    query,
  }),
  fulfilled: payload => ({
    type: SEARCH_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: SEARCH_ACTIONS.REJECTED,
    payload,
  }),
  getPlace: placeId => ({
    type: SEARCH_ACTIONS.GET_PLACE,
    placeId,
  }),
})

const initState = {
  loading: false,
  results: [],
  message: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_ACTIONS.REQUEST:
      return { ...state, loading: true }
    case SEARCH_ACTIONS.FULFILLED:
      return { ...state, results: action.payload }
    case SEARCH_ACTIONS.REJECTED:
      return { ...state, results: [], message: action.payload }

    default:
      return state
  }
}

export default reducer
