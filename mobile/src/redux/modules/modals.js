import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  TOGGLE: `${CONFIG.APP_NAME}/modal/toggle`,
})

export const actions = Object.freeze({
  toggle: (modalName, status) => ({
    type: ACTIONS.TOGGLE,
    modalName,
    status,
  }),
})

const initState = {
  signUp: false,
  logIn: false,
  trade: false,
  search: false,
  subscription: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE:
      return { ...state, [action.modalName]: action.status }
    default:
      return state
  }
}

export default reducer
