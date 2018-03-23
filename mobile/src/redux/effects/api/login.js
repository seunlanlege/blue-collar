import { AsyncStorage } from 'react-native'
import rootReducer from '../../modules'
import httpClient from './http-client'

// This will be handle login and signup request
export const authRequest = (url, payload) =>
  httpClient
    .post(url, payload)
    .then(
      ({ data, headers }) =>
        data && data.data && data.data.email
          ? Object.assign({}, data.data, headers)
          : data,
    )

// Clear the rootReducer and persist storage later
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
