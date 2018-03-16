import { AsyncStorage } from 'react-native'
import rootReducer from '../../modules'
import httpClient from './http-client'

export const logInRequest = payload =>
  httpClient
    .post('/login', payload)
    .then(
      response =>
        response && response.data && response.data.email
          ? response.data
          : response,
    )

// Clear the rootReducer, persist storage
export const logOutRequest = () =>
  AsyncStorage.multiRemove([
    'email',
    'accessToken',
    'firstName',
    'lastName',
    'trade',
    'contactable',
    'jobPosition',
  ]).then(response => rootReducer(undefined, {}))
