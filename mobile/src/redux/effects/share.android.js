import { Share } from 'react-native'

export const shareApp = firstName =>
  Share.share({
    message: `${firstName} has invited you to try a FREE month trial of Blue Collar Lists. To claim your free gift, sign up using this link: https://www.bluecollarlists/shftjvf`,
  })
