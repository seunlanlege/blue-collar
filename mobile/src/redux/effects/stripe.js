import axios from 'axios'

import CONFIG from '../../../config'

const getCardInfo = ({ cardNumber, cvc, expirationDate, cardHolderName }) => ({
  'card[number]': cardNumber,
  'card[exp_month]':
    expirationDate &&
    expirationDate.replace(/[&"/"#,+()$~%.'":*?<>{}-]/g, '').slice(0, 2),
  'card[exp_year]':
    expirationDate &&
    expirationDate.replace(/[&"/"#,+()$~%.'":*?<>{}-]/g, '').slice(2, 6),
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
    data: getCardInfo(cardInfo),
  }).then(({ data }) => data)
