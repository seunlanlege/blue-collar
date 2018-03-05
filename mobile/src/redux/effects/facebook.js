import expo from 'expo'
import axios from 'axios'
import CONFIG from '../../../config'

export const signUp = () =>
  expo.Facebook.logInWithReadPermissionsAsync(CONFIG.FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  })
    .then(payload =>
      axios.get(`https://graph.facebook.com/me?access_token=${payload.token}`),
    )
    .then(response => response.data)
