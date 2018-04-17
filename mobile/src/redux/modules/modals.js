import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  TOGGLE: `${CONFIG.APP_NAME}/modal/toggle`,
  RESET: `${CONFIG.APP_NAME}/modal/reset`,
})

export const actions = Object.freeze({
  toggle: (modalName, status) => ({
    type: ACTIONS.TOGGLE,
    modalName,
    status,
  }),
  reset: () => ({
    type: ACTIONS.RESET,
  }),
})

const initState = {
  signUp: false,
  logIn: false,
  trade: false,
  search: false,
  userDetail: false,
  subscription: false,
  comingSoon: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE:
      return { ...state, [action.modalName]: action.status }
    case ACTIONS.RESET:
      return {
        ...state,
        signUp: false,
        logIn: false,
        trade: false,
        search: false,
        userDetail: false,
        subscription: false,
        comingSoon: false,
      }
    default:
      return state
  }
}

export default reducer
