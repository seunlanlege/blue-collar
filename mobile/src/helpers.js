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
