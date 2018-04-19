import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  SEARCH: `${CONFIG.APP_NAME}/places/search`,
  SEARCH_FULFILLED: `${CONFIG.APP_NAME}/places/search-fulfilled`,
  SEARCH_REJECTED: `${CONFIG.APP_NAME}/places/search-rejected`,

  GET_PLACE: `${CONFIG.APP_NAME}/places/get-place`,
  GET_FULFILLED: `${CONFIG.APP_NAME}/places/get-fulfilled`,
  GET_REJECTED: `${CONFIG.APP_NAME}/places/get-rejected`,

  COORDINATE: `${CONFIG.APP_NAME}/places/coordinate`,
  GRANTED: `${CONFIG.APP_NAME}/places/granted`,
})

export const actions = Object.freeze({
  search: (lat, long, query) => ({
    type: ACTIONS.SEARCH,
    lat,
    long,
    query,
  }),
  searchFulfilled: payload => ({
    type: ACTIONS.SEARCH_FULFILLED,
    payload,
  }),
  searchRejected: payload => ({
    type: ACTIONS.SEARCH_REJECTED,
    payload,
  }),

  getPlace: placeId => ({
    type: ACTIONS.GET_PLACE,
    placeId,
  }),
  getFulfilled: payload => ({
    type: ACTIONS.GET_FULFILLED,
    payload,
  }),
  getRejected: payload => ({
    type: ACTIONS.GET_REJECTED,
    payload,
  }),

  coordinate: () => ({
    type: ACTIONS.COORDINATE,
  }),
  granted: (status, lat, long) => ({
    type: ACTIONS.GRANTED,
    status,
    lat,
    long,
  }),
})

const initState = {
  loading: false,
  results: [],
  message: '',
  query: null,
  lat: null,
  long: null,
  status: null,

  placeId: '',
  id: null,
  createdAt: null,
  updatedAt: null,
  googleId: null,
  name: null,
  vicinity: null,
  category: null,
  activeBidsCount: null,
  reviews: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH:
      return { ...state, loading: true }
    case ACTIONS.GET_PLACE:
      return { ...state, placeId: action.placeId }

    case ACTIONS.GRANTED:
      return {
        ...state,
        status: action.status,
        lat: action.lat,
        long: action.long,
      }

    case ACTIONS.SEARCH_FULFILLED:
      return { ...state, results: action.payload, loading: false }
    case ACTIONS.SEARCH_REJECTED:
      return {
        ...state,
        message: action.payload,
        loading: false,
      }

    case ACTIONS.GET_FULFILLED:
      return {
        ...state,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
        googleId: action.payload.googleId,
        name: action.payload.name,
        vicinity: action.payload.vicinity,
        category: action.payload.category,
        activeBidsCount: action.payload.activeBidsCount,
        reviews: action.payload.reviews || [],
        loading: false,
      }

    case ACTIONS.GET_REJECTED:
      return { ...state, message: action.payload, loading: false }

    default:
      return state
  }
}

export default reducer
