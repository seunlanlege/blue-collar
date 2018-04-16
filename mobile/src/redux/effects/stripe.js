import CONFIG from '../../../config'

const stripe = require('stripe-client')(CONFIG.STRIPE_PUBLISHABLE_KEY)

const getCardInfo = ({ cardNumber, cvc, expirationDate, cardHolderName }) => ({
  card: {
    number: cardNumber,
    exp_month: expirationDate
      .replace(/[&"/"#,+()$~%.'":*?<>{}-]/g, '')
      .slice(0, 2),
    exp_year: expirationDate
      .replace(/[&"/"#,+()$~%.'":*?<>{}-]/g, '')
      .slice(2, 4),
    cvc,
    name: cardHolderName,
  },
})

export const createToken = information =>
  stripe.createToken(getCardInfo(information)).then(({ id }) => id)
