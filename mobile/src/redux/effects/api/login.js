import http from './http-client'

export const forgotPassword = payload =>
  http.post(payload).then(({ data }) => data)
