import CONFIG from '../../../config'

export const PLACE_ACTIONS = Object.freeze({
  SEARCH: `${CONFIG.APP_NAME}/places/search`,
  FULFILLED: `${CONFIG.APP_NAME}/places/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/places/rejected`,
  GET_PLACE: `${CONFIG.APP_NAME}/places/get-place`,
  PLACE_BID: `${CONFIG.APP_NAME}/places/place-bid`,
})

export const placeActions = Object.freeze({
  search: (lat, long, query) => ({
    type: PLACE_ACTIONS.SEARCH,
    lat,
    long,
    query,
  }),
  fulfilled: payload => ({
    type: PLACE_ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: PLACE_ACTIONS.REJECTED,
    payload,
  }),
  getPlace: placeId => ({
    type: PLACE_ACTIONS.GET_PLACE,
    placeId,
  }),
  bid: () => ({
    type: PLACE_ACTIONS.PLACE_BID,
  }),
})

const initState = {
  loading: false,
  results: [],
  isActiveSearch: false,
  message: '',
  query: null,
  placeId: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case PLACE_ACTIONS.SEARCH:
      return { ...state, isActiveSearch: true, loading: true }
    case PLACE_ACTIONS.GET_PLACE:
      return { ...state, placeId: action.placeId }
    case PLACE_ACTIONS.PLACE_BID:
      return { ...state, loading: true }
    case PLACE_ACTIONS.FULFILLED:
      return { ...state, results: action.payload, loading: false }
    case PLACE_ACTIONS.REJECTED:
      return {
        ...state,
        isActiveSearch: false,
        message: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default reducer
