import axios from 'axios'

import CONFIG from '../../../../config'

import { parseUser } from './users'

const adaptReward = (redeemType, amount, txType, id) => ({
  rewards: {
    amount,
    redeem_type: redeemType,
    tx_type: txType,
  },
})

export const post = ({
  user: { id, authHeaders },
  redeemType,
  amount,
  txType,
}) =>
  axios({
    method: 'post',
    headers: authHeaders,
    url: `${CONFIG.API_BASE_URL}/api/v1/users/${id}/rewards`,
    data: adaptReward(redeemType, amount, txType, id),
  }).then(({ data }) => parseUser(data))
