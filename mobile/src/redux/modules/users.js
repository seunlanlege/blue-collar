import { fromJS } from 'immutable'
import { LOGIN_ACTIONS } from './login'

export const userActions = Object.freeze({
  store: payload => ({
    type: LOGIN_ACTIONS.FULFILLED,
    payload,
  }),
})

const initState = fromJS({
  email: '',
  accessToken: '',
  firstName: '',
  lastName: '',
  trade: '',
  contactable: '',
  jobPosition: '',
})

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.FULFILLED:
      return state
        .set('email', action.payload.email)
        .set('accessToken', action.payload.accessToken)
        .set('firstName', action.payload.firstName)
        .set('lastName', action.payload.firstName)
        .set('trade', action.payload.trade)
        .set('contactable', action.payload.contactable)
        .set('jobPosition', action.payload.jobPosition)
    default:
      return state
  }
}

export default reducer
