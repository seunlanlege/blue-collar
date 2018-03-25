import CONFIG from '../../../config'

export const SEARCH_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/venues/request`,
  FULFILLED: `${CONFIG.APP_NAME}/venues/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/venues/rejected`,
  GET_PLACE: `${CONFIG.APP_NAME}/venues/get-place`,
})

export const searchActions = Object.freeze({
  request: (lat, long, query) => ({
    type: SEARCH_ACTIONS.SEARCH,
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
    case SEARCH_ACTIONS.SEARCH:
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
