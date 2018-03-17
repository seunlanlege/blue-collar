import CONFIG from '../../../config'

export const SHARE_ACTIONS = Object.freeze({
  REQUEST: `${CONFIG.APP_NAME}/invite/request`,
  FULFILLED: `${CONFIG.APP_NAME}/invite/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/invite/rejected`,
})

export const shareActions = Object.freeze({
  request: payload => ({
    type: SHARE_ACTIONS.REQUEST,
    payload,
  }),
  fulfilled: payload => ({
    type: SHARE_ACTIONS.FULFILLED,
  }),
  rejected: payload => ({
    type: SHARE_ACTIONS.REJECTED,
  }),
})

const initState = { message: '' }

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SHARE_ACTIONS.FULFILLED:
    case SHARE_ACTIONS.REJECTED:
      return { ...state, message: action.payload }
    default:
      return state
  }
}

export default reducer
