import axios from 'axios'
import CONFIG from '../../../../config'

export const post = ({ user: { id, authHeaders }, token }) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}/subscription`,
    headers: authHeaders,
    data: {
      subscription: { token },
    },
  }).then(({ data }) => data)

export const show = ({ user: { id, authHeaders } }) =>
  axios({
    method: 'get',
    headers: authHeaders,
    url: `${CONFIG.USERS_PATH}/${id}/subscription`,
  }).then(data => data)

export const remove = ({ user: { id, authHeaders } }) =>
  axios({
    method: 'delete',
    headers: authHeaders,
    url: `${CONFIG.USERS_PATH}/${id}/subscription`,
  }).then(data => data)
