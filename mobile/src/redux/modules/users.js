import CONFIG from '../../../config'

export const ACTIONS = Object.freeze({
  LOGIN: `${CONFIG.APP_NAME}/users/login`,
  SIGNUP: `${CONFIG.APP_NAME}/users/signup`,
})

export const actions = Object.freeze({
  login: payload => ({
    type: ACTIONS.LOGIN,
    payload,
  }),
  signup: payload => ({
    type: ACTIONS.SIGNUP,
    payload,
  }),
})

const initState = {
  authHeaders: null,
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  trade: null,
  contactable: null,
  jobPosition: null,

  // TODO: Handle this with redux-form. This is a hack.
  loading: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
    case ACTIONS.SIGNUP:
      console.log('INSIDE: ', action.payload)
      return state

    default:
      return state
  }
}

export default reducer
