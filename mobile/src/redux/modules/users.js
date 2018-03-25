import { LOGIN_ACTIONS } from './login'

export const userActions = Object.freeze({
  store: payload => ({
    type: LOGIN_ACTIONS.FULFILLED,
    payload,
  }),
})

const initState = {
  userId: '',
  email: '',
  accessToken: '',
  tokenType: '',
  uid: '',
  client: '',
  expiry: '',
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
        userId: action.payload.id,
        email: action.payload.email,
        accessToken: action.payload['access-token'],
        tokenType: action.payload['token-type'],
        uid: action.payload.uid,
        client: action.payload.client,
        expiry: action.payload.expiry,
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
