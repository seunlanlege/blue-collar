import axios from 'axios'
import qs from 'qs'

import CONFIG from '../../../config'

const getCardInfo = ({ cardNumber, cvc, expirationDate, cardHolderName }) => ({
  'card[number]': cardNumber,
  'card[exp_month]': expirationDate
    .replace(/[&"/"#,+()$~%.'":*?<>{}-]/g, '')
    .slice(0, 2),
  'card[exp_year]': expirationDate
    .replace(/[&"/"#,+()$~%.'":*?<>{}-]/g, '')
    .slice(2, 6),
  'card[cvc]': cvc,
})

export const createToken = cardInfo =>
  axios({
    method: 'post',
    url: `${CONFIG.STRIPE_BASE_URL}/v1/tokens`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${CONFIG.STRIPE_PUBLISHABLE_KEY}`,
    },
    data: qs.stringify(getCardInfo(cardInfo)),
  }).then(data => data)
