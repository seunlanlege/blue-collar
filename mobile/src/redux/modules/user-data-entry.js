import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  UPDATE_FIELD: `${CONFIG.APP_NAME}/user-data-entry/update-field`,
  UPDATE: `${CONFIG.APP_NAME}/user-data-entry/update`,
  FULFILLED: `${CONFIG.APP_NAME}/user-data-entry/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/user-data-entry/rejected`,
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
      return { ...state, loading: false }

    default:
      return state
  }
}

export default reducer
