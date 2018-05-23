import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/user-data-entry/update-field`,
  UPDATE: `${CONFIG.APP_NAME}/user-data-entry/update`,
  FULFILLED: `${CONFIG.APP_NAME}/user-data-entry/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/user-data-entry/rejected`,
  CLEAR_ERROR: `${CONFIG.APP_NAME}/user-data-entry/clear-error`,
})

export const actions = Object.freeze({
  updateField: (field, value) => ({
    type: ACTIONS.UPDATE_FIELD,
    field,
    value,
  }),
  update: payload => ({
    type: ACTIONS.UPDATE,
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
  clearError: () => ({
    type: ACTIONS.CLEAR_ERROR,
  }),
})

const initState = {
  loading: false,
  firstName: '',
  lastName: '',
  trade: '',
  jobPosition: '',
  placeId: '',
  name: '',
  contactable: null,
  message: null,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case ACTIONS.UPDATE:
      return { ...state, loading: true }

    case ACTIONS.FULFILLED:
      return { ...state, loading: false }
    case ACTIONS.REJECTED:
      return { ...state, message: action.payload, loading: false }

    case ACTIONS.CLEAR_ERROR:
      return { ...state, message: null }
    default:
      return state
  }
}

export default reducer
