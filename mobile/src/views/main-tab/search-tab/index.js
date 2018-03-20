import { StackNavigator } from 'react-navigation'

import Search from './search'
import SelectedResult from './selected-result'

const SearchStack = StackNavigator({
  search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  selectedResult: {
    screen: SelectedResult,
    navigationOptions: {
      header: null,
    },
  },
})

export default SearchStack
