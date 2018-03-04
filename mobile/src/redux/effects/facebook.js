import Expo from 'expo'
import Axios from 'axios'
import CONFIG from '../../../config'

export const signUp = () =>
  Expo.Facebook.logInWithReadPermissionsAsync(CONFIG.FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  })
    .then(payload =>
      Axios.get(`https://graph.facebook.com/me?access_token=${payload.token}`),
    )
    .then(response => response.data)
