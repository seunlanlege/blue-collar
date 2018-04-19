import axios from 'axios'

import CONFIG from '../../../../config'

const adaptReward = (redeemType, amount, txType, id) => ({
  reward_transaction: {
    redeem_type: redeemType,
    amount,
    tx_type: txType,
    user_id: id,
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
    url: `${CONFIG.API_BASE_URL}/api/v1/rewards`,
    data: adaptReward(redeemType, amount, txType, id),
  }).then(({ data }) => data)
