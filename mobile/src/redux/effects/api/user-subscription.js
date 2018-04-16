import axios from 'axios'
import CONFIG from '../../../../config'

export const post = ({ user: { id, authHeaders }, token }) =>
  axios({
    method: 'post',
    headers: authHeaders,
    url: `${CONFIG.USERS_PATH}/${id}/subscription`,
    data: {
      subscription: { token },
    },
  }).then(data => {
    console.log('IDDDD', id, authHeaders, token)
    return data
  })

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
