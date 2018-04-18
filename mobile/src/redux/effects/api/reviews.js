import axios from 'axios'

import CONFIG from '../../../../config'

export const get = ({ user: { authHeaders } }) =>
  axios({
    method: 'get',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/reviews`,
  }).then(({ data }) => data)
