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
