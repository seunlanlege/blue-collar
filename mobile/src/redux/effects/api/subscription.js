import axios from 'axios'

import CONFIG from '../../../../config'

import { parseUser } from './users'
import { errorAlert } from './errors'

export const post = ({ user: { id, authHeaders }, token }) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}/subscription`,
    headers: authHeaders,
    data: {
      subscription: { token },
    },
  })
    .then(({ data }) => ({ user: parseUser(data) }))
    .catch(errorAlert)

export const remove = ({ user: { id, authHeaders } }) =>
  axios({
    method: 'delete',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}/subscription`,
  })
    .then(({ data }) => ({ user: parseUser(data) }))
    .catch(errorAlert)
