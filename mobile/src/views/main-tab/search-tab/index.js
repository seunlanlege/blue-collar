import { StackNavigator } from 'react-navigation'

import Reviews from './reviews'
import PlaceReviews from './place-reviews'

const SearchStack = StackNavigator({
  reviews: {
    screen: Reviews,
    navigationOptions: {
      header: null,
    },
  },
  placeReviews: {
    screen: PlaceReviews,
    navigationOptions: {
      header: null,
    },
  },
})

export default SearchStack
