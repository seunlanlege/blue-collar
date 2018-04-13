import rootReducer from '../../modules'
import http from './http-client'
import { persistor } from '../..'

// This will be handle login and signup request
export const authRequest = (url, payload) =>
  http
    .post(url, payload)
    .then(
      ({ data, headers }) =>
        data && data.data && data.data.email
          ? Object.assign({}, data.data, headers)
          : data,
    )

export const logOutRequest = () =>
  persistor.purge().then(response => rootReducer(undefined, {}))

export const forgotPassword = payload =>
  http.post(payload).then(({ data }) => data)
