import images from './assets/images'

const config = Object.freeze({
  APP_NAME: 'blue-collar',
  FACEBOOK_APP_ID: '337883893384348',
  GOOGLE_API_KEY: 'AIzaSyCo8D74SL6feiIPwn3Y5xVssMKWIthQjjs',
  GOOGLE_PLACE_URL: `https://maps.googleapis.com/maps/api/place/nearbysearch`,
  API_BASE_URL: 'http://0.0.0.0:3001',
  STRIPE_BASE_URL: 'https://api.stripe.com',
  REWARD_OPTIONS: [
    {
      id: 1,
      icon: images.placeholderHat,
      name: 'Blue Collar Lists Hat',
      points: '1000 pts',
    },
    {
      id: 2,
      icon: images.placeholderShirt,
      name: 'Blue Collar Lists Shirt',
      points: '1000 pts',
    },
    {
      id: 3,
      icon: images.placeholderSweat,
      name: 'Blue Collar Lists Sweatshirt',
      points: '2000 pts',
    },
    {
      id: 4,
      icon: images.placeholderTruck,
      name: 'Entry to Win Truck',
      points: '5000 pts',
    },
  ],
  TRADE_OPTIONS: [
    { id: 1, name: 'Carpenter' },
    { id: 2, name: 'Cleanouts Demolition' },
    { id: 3, name: 'Electrician' },
    { id: 4, name: 'General Contractor' },
    { id: 5, name: 'Gutter' },
    { id: 6, name: 'Fence' },
    { id: 7, name: 'Framer' },
    { id: 8, name: 'Flooring Tile' },
    { id: 9, name: 'Hvac' },
    { id: 10, name: 'Landscaping' },
    { id: 11, name: 'Mason' },
    { id: 12, name: 'Movers' },
    { id: 13, name: 'Plasterer or Drywall' },
    { id: 14, name: 'Plumber' },
    { id: 15, name: 'Painter' },
    { id: 16, name: 'Roofer' },
    { id: 17, name: 'Tree Services' },
    { id: 0, name: 'Other' },
  ],
  STRIPE_PUBLISHABLE_KEY: 'pk_test_fO3GCjcawE4ygEdS1LwUOVS6',
})

export default config
