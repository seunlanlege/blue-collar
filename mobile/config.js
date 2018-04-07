const config = Object.freeze({
  APP_NAME: 'blue-collar',
  FACEBOOK_APP_ID: '337883893384348',
  GOOGLE_API_KEY: 'AIzaSyCo8D74SL6feiIPwn3Y5xVssMKWIthQjjs',
  GOOGLE_PLACE_URL: `https://maps.googleapis.com/maps/api/place/nearbysearch`,
  API_BASE_URL: 'http://localhost:3001',
  STRIPE_BASE_URL: 'https://api.stripe.com',
  SIGN_UP_PATH: '/auth',
  LOG_IN_PATH: '/auth/sign_in',
  PLACES_PATH: '/api/v1/places',
  USERS_PATH: '/api/v1/users',
  REVIEWS_PATH: '/api/v1/reviews',
  REDEEM_PATH: '/api/v1/redeems',
})

export default config
