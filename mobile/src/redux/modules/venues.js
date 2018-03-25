import CONFIG from '../../../config'

export const VENUE_ACTIONS = Object.freeze({
  SEARCH: `${CONFIG.APP_NAME}/venues/search`,
  FULFILLED: `${CONFIG.APP_NAME}/venues/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/venues/rejected`,
  GET_PLACE: `${CONFIG.APP_NAME}/venues/get-place`,
})

export const venueActions = Object.freeze({
  search: (lat, long, query) => ({
    type: VENUE_ACTIONS.SEARCH,
    lat,
    long,
    query,
  }),
  fulfilled: payload => ({
    type: VENUE_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: VENUE_ACTIONS.REJECTED,
    payload,
  }),
  getPlace: placeId => ({
    type: VENUE_ACTIONS.GET_PLACE,
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
    case VENUE_ACTIONS.SEARCH:
      return { ...state, loading: true }
    case VENUE_ACTIONS.FULFILLED:
      return { ...state, results: action.payload }
    case VENUE_ACTIONS.REJECTED:
      return { ...state, results: [], message: action.payload }

    default:
      return state
  }
}

export default reducer
