import axios from 'axios'

import CONFIG from '../../../../config'

import { errorAlert } from './errors'

export const forgotPassword = ({ email }) =>
  axios({
    method: 'post',
    url: `${CONFIG.API_BASE_URL}/api/v1/forgot_password`,
    data: { email },
  })
    .then(({ data }) => data)
    .catch(errorAlert)
