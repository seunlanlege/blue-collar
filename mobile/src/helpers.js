export const formatDate = datetime =>
  new Date(datetime)
    .toUTCString()
    .split(' ')
    .slice(1, 4)
    .join(' ')
