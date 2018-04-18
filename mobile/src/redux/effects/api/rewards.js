import axios from 'axios'

import CONFIG from '../../../../config'

export const post = ({ user: { authHeaders }, rewardTransaction }) =>
  axios({
    method: 'post',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/rewards`,
    data: { reward_transaction: rewardTransaction },
  }).then(({ data }) => data)
