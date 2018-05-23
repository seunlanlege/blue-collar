export const formatDate = datetime =>
  new Date(datetime)
    .toUTCString()
    .split(' ')
    .slice(1, 4)
    .join(' ')

export const formatContactType = contactType =>
  contactType
    .replace(/[_]/g, ' ')
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
    .join(' ')

export const countStarOverall = ({
  starBidProcess,
  starChangeOrdersAccepted,
  starJobCompleted,
  starPaymentsSatisfaction,
  starTimeRespected,
  starWorkWithAgain,
}) =>
  Math.floor(
    (starBidProcess +
      starChangeOrdersAccepted +
      starTimeRespected +
      starJobCompleted +
      starPaymentsSatisfaction +
      starWorkWithAgain) /
      6,
  )

export const countAllReviewStar = reviews =>
  reviews &&
  reviews.reduce((acc, review) => acc + review.starOverall, 0) / reviews.length

export const getErrorMessage = error => {
  const { response } = error
  if (response && response.data) {
    if (Array.isArray(response.data.errors)) {
      return response.data.errors[0]
    }
    if (
      typeof response.data.errors === 'object' &&
      response.data.errors.full_messages
    ) {
      return response.data.errors.full_messages.toString()
    }
    if (response.data.errors) {
      return response.data.errors.toString()
    }
    return "Unfortunately, We can't process your request!"
  }
  if (error.message) {
    return error.message
  }

  return error.toString()
}
