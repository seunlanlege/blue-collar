import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/user-data-entry/update-field`,
  REQUEST: `${CONFIG.APP_NAME}/user-data-entry/request`,
  FULFILLED: `${CONFIG.APP_NAME}/user-data-entry/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/user-data-entry/rejected`,
})

export const actions = Object.freeze({
  updateField: (field, value) => ({
    type: ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  request: payload => ({
    type: ACTIONS.REQUEST,
    payload,
  }),
  fulfilled: payload => ({
    type: ACTIONS.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  loading: false,
  firstName: '',
  lastName: '',
  trade: '',
  jobPosition: '',
  vicinity: '',
  placeId: '',
  name: '',
  contactable: null,
  companyId: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case ACTIONS.REQUEST:
      return { ...state, loading: true }
    case ACTIONS.FULFILLED:
      return { ...state, placeId: action.payload.place_id, loading: false }
    case ACTIONS.REJECTED:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default reducer
