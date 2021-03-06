import images from './assets/images'

/* eslint-disable */
const API_BASE_URL = __DEV__
  ? 'http://192.168.0.126:3001'
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
  SUPPORT_URL: 'mailto:support@bluecollar.com',
  SENTRY_DSN: 'https://2bd3b9bc60834b3198a0c6cc41acdad7@sentry.io/1200770',
  REWARD_OPTIONS: [
    {
      id: 1,
      icon: images.placeholderHat,
      name: 'Blue Collar Lists Hat',
      points: 1000,
    },
    {
      id: 2,
      icon: images.placeholderShirt,
      name: 'Blue Collar Lists Shirt',
      points: 1000,
    },
    {
      id: 3,
      icon: images.placeholderSweat,
      name: 'Blue Collar Lists Sweatshirt',
      points: 2000,
    },
    {
      id: 4,
      icon: images.placeholderTruck,
      name: 'Entry to Win Truck',
      points: 5000,
    },
  ],
  TRADE_OPTIONS: [
    {
      id: 1,
      name: 'Carpenter',
    },
    {
      id: 2,
      name: 'Cleanouts Demolition',
    },
    {
      id: 3,
      name: 'Electrician',
    },
    {
      id: 4,
      name: 'General Contractor',
    },
    {
      id: 5,
      name: 'Gutter',
    },
    {
      id: 6,
      name: 'Fence',
    },
    {
      id: 7,
      name: 'Framer',
    },
    {
      id: 8,
      name: 'Flooring Tile',
    },
    {
      id: 9,
      name: 'Hvac',
    },
    {
      id: 10,
      name: 'Landscaping',
    },
    {
      id: 11,
      name: 'Mason',
    },
    {
      id: 12,
      name: 'Movers',
    },
    {
      id: 13,
      name: 'Plasterer or Drywall',
    },
    {
      id: 14,
      name: 'Plumber',
    },
    {
      id: 15,
      name: 'Painter',
    },
    {
      id: 16,
      name: 'Roofer',
    },
    {
      id: 17,
      name: 'Tree Services',
    },
    {
      id: 0,
      name: 'Other',
    },
  ],
  STRIPE: {
    BASE_URL: 'https://api.stripe.com',
    PUBLISHABLE_KEY: __DEV__
      ? 'pk_test_fO3GCjcawE4ygEdS1LwUOVS6'
      : 'pk_live_fyYLaN2FqUMKDRvdK0CArcDy',
  },
  STATE_OPTIONS: {
    AZ: true,
    CA: true,
    CO: true,
    CT: true,
    FL: true,
    HI: true,
    IL: true,
    KS: true,
    MA: true,
    ME: true,
    MN: true,
    MS: true,
    MT: true,
    NC: true,
    NE: true,
    NH: true,
    NV: true,
    NY: true,
    OH: true,
    OK: true,
    PA: true,
    SD: true,
    TN: true,
    VA: true,
    WA: true,
  },
})
/* eslint-enable */

export default config
// https://181d2b5b.ngrok.io/omniauth/facebook/callback
// https://blue-collar.herokuapp.com//omniauth/facebook/callback
