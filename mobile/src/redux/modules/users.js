import { LOGIN_ACTIONS } from './login'

export const userActions = Object.freeze({
  store: payload => ({
    type: LOGIN_ACTIONS.FULFILLED,
    payload,
  }),
})

const initState = {
  email: '',
  accessToken: '',
  firstName: '',
  lastName: '',
  trade: '',
  contactable: '',
  jobPosition: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.FULFILLED:
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        firstName: action.payload.firstName,
        lastName: action.payload.firstName,
        trade: action.payload.trade,
        contactable: action.payload.contactable,
        jobPosition: action.payload.jobPosition,
      }
    default:
      return state
  }
}

export default reducer
