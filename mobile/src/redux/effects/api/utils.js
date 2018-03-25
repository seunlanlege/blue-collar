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
}) => ({
  user: {
    first_name: firstName,
    last_name: lastName,
    trade: trade.toLowerCase().replace(/\s/g, '_'),
    job_position: jobPosition,
    company: {
      vicinity,
      place_id: placeId,
      name,
    },
  },
})

export const stripeData = ({
  cardNumber,
  cardHolderName,
  expirationDate,
  cvv,
}) => ({ cardNumber, cardHolderName, expirationDate, cvv })
