import { REWARD_OPTIONS } from './rewards'
import { TRADE_OPTIONS } from './trades'
import { STATE_OPTIONS } from './states'

/* eslint-disable */
const API_BASE_URL = __DEV__
  ? 'http://0.0.0.0:3001'
  : 'https://blue-collar.herokuapp.com'

const config = Object.freeze({
  API_BASE_URL,
  APP_NAME: 'blue-collar',
  FACEBOOK: {
    APP_ID: '337883893384348',
    REDIRECT_URI: `${API_BASE_URL}/omniauth/facebook/callback`,
  },
  GOOGLE_API_KEY: 'AIzaSyCo8D74SL6feiIPwn3Y5xVssMKWIthQjjs',
  GOOGLE_PLACE_URL: `https://maps.googleapis.com/maps/api`,
  SUPPORT_URL: 'mailto:memberservices@bluecollarlists.com',
  SENTRY_DSN: 'https://2bd3b9bc60834b3198a0c6cc41acdad7@sentry.io/1200770',
  SLACK_URL:
    'https://hooks.slack.com/services/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',
  REWARD_OPTIONS,
  TRADE_OPTIONS,
  STRIPE: {
    BASE_URL: 'https://api.stripe.com',
    PUBLISHABLE_KEY: __DEV__
      ? 'pk_test_fO3GCjcawE4ygEdS1LwUOVS6'
      : 'pk_live_fyYLaN2FqUMKDRvdK0CArcDy',
  },
  STATE_OPTIONS,
})
/* eslint-enable */

export default config
// https://181d2b5b.ngrok.io/omniauth/facebook/callback
// https://blue-collar.herokuapp.com//omniauth/facebook/callback
