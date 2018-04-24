import { AuthSession } from 'expo'

import CONFIG from '../../../config'

// import { getAuthHeaders } from './api/users'

export const signUp = () =>
  new Promise((resolve, reject) => {
    AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${CONFIG.FACEBOOK.APP_ID}` +
        `&redirect_uri=${CONFIG.FACEBOOK.REDIRECT_URI}`,
    })
      .then(({ type, params, event }) => {
        console.log('FACEBOOK RETURNED', type, params, event)
      })
      // .then(({ headers, data: { data } }) => ({
      //   user: {
      //     authHeaders: getAuthHeaders(headers),
      //     id: data.id,
      //     email: data.email,
      //     referralCode: data.referral_code,
      //   },
      // }))
      .catch(reject)
  })
