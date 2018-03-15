import httpClient from './http-client'
import { logInActions } from '../../modules/login'

export const logInRequest = payload => {
  httpClient.post('/login', payload).then(response => {
    if (response.data && response.data.access_token) {
      httpClient.setAuthorizationToken(response.data.access_token)
      logInActions()
    }
    return response.data
  })
}
