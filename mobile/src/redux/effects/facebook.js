import Expo from 'expo'
import axios from 'axios'

import CONFIG from '../../../config'
import { facebookSignup } from './api/users'

export const login = () =>
  new Promise((resolve, reject) => {
    Expo.Facebook.logInWithReadPermissionsAsync(CONFIG.FACEBOOK.APP_ID, {
      permissions: ['public_profile', 'email'],
    })
      .then(({ token }) => {
        axios({
          method: 'get',
          url: `https://graph.facebook.com/me?fields=email,name&access_token=${token}`,
        }).then(({ data }) => {
          const { id, name, email } = data
          facebookSignup({ uid: id, name, email }).then(({ user }) => {
            resolve(user)
          })
        })
      })
      .catch(reject)
  })
