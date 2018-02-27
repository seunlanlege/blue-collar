import React from 'react'
import { Provider } from 'react-redux'

import NavigationWithRedux from './src/navigation'
import redux from './src/redux'

const App = () => (
  <Provider store={redux}>
    <NavigationWithRedux />
  </Provider>
)

export default App
