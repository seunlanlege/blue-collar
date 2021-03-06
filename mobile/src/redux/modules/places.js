import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/places/update-field`,

  SEARCH: `${CONFIG.APP_NAME}/places/search`,
  SEARCH_FULFILLED: `${CONFIG.APP_NAME}/places/search-fulfilled`,
  SEARCH_REJECTED: `${CONFIG.APP_NAME}/places/search-rejected`,

  GET_PLACE: `${CONFIG.APP_NAME}/places/get-place`,
  GET_FULFILLED: `${CONFIG.APP_NAME}/places/get-fulfilled`,
  GET_REJECTED: `${CONFIG.APP_NAME}/places/get-rejected`,

  GET_STATE_CODE_FULFILLED: `${
    CONFIG.APP_NAME
  }/places/get-state-code-fulfilled`,

  COORDINATE: `${CONFIG.APP_NAME}/places/coordinate`,
  GRANTED: `${CONFIG.APP_NAME}/places/granted`,
  CLEAR_REVIEWS: `${CONFIG.APP_NAME}/places/clear-reviews`,
})

export const actions = Object.freeze({
  updateField: (field, value) => ({
    type: ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),

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

  getStateCodeFulfilled: payload => ({
    type: ACTIONS.GET_STATE_CODE_FULFILLED,
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

  clearReviews: () => ({ type: ACTIONS.CLEAR_REVIEWS }),
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
  vicinity: '',
  geoCode: null,

  id: null,
  createdAt: null,
  updatedAt: null,
  googleId: null,
  name: null,
  formattedAddress: null,
  state: null,
  category: null,
  activeBidsCount: null,
  reviews: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }

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

    case ACTIONS.GET_STATE_CODE_FULFILLED:
      return { ...state, geoCode: action.payload, loading: false }

    case ACTIONS.GET_FULFILLED:
      return {
        ...state,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
        googleId: action.payload.googleId,
        name: action.payload.name,
        formattedAddress: action.payload.formatted_address,
        state: action.payload.state,
        category: action.payload.category,
        activeBidsCount: action.payload.activeBidsCount,
        reviews: action.payload.reviews || [],
        groupBids: action.payload.groupBids,
        loading: false,
      }

    case ACTIONS.CLEAR_REVIEWS:
      return { ...state, reviews: [] }

    case ACTIONS.GET_REJECTED:
      return { ...state, message: action.payload, loading: false }

    default:
      return state
  }
}

export default reducer
