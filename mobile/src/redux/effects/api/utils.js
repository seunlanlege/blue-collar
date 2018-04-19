export const authHeader = ({
  accessToken,
  tokenType,
  client,
  expiry,
  uid,
}) => ({
  headers: {
    'access-token': accessToken,
    'token-type': tokenType,
    client,
    expiry,
    uid,
  },
})

export const setUserData = ({
  firstName,
  lastName,
  trade,
  jobPosition,
  vicinity,
  placeId,
  name,
  category,
}) => ({
  user: {
    first_name: firstName,
    last_name: lastName,
    trade: trade.toLowerCase().replace(/\s/g, '_'),
    job_position: jobPosition,
    place: {
      vicinity,
      google_id: placeId,
      name,
      category,
    },
  },
})

export const cardData = ({
  cardNumber,
  cardHolderName,
  expirationDate,
  cvv,
}) => ({ cardNumber, cardHolderName, expirationDate, cvv })

export const setRedeemData = ({ promoCode, userId }) => ({
  promo_code: promoCode,
  user_id: userId,
})
