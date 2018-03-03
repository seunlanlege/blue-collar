import Expo from 'expo'
import CONFIG from '../../../config'

export const signUp = () =>
  Expo.Facebook.logInWithReadPermissionsAsync(CONFIG.FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  })
    .then(response => response)
    .catch(error => error.response)
