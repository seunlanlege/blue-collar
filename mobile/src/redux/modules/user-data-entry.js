import CONFIG from '../../../config'

import { LOGIN_ACTIONS } from './login'

export const DATA_ENTRY = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/user-data-entry/request`,
  FULFILLED: `${CONFIG.APP_NAME}/user-data-entry/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/user-data-entry/rejected`,
})

export const dataEntryActions = Object.freeze({
  request: () => ({
    type: DATA_ENTRY.REQUEST,
  }),
  fulfilled: payload => ({
    type: DATA_ENTRY.FULFILLED,
    payload,
  }),
  rejected: payload => ({
    type: DATA_ENTRY.REJECTED,
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
  contactable: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value }
    case DATA_ENTRY.REQUEST:
      return { ...state, loading: true }
    case DATA_ENTRY.FULFILLED:
      return { ...state, loading: false }
    case DATA_ENTRY.REJECTED:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default reducer
