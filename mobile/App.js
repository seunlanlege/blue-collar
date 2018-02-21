import React from 'react'
import { Provider } from 'react-redux'

import RootView from './src/views'
import redux from './src/redux'

const App = () => (
  <Provider store={redux}>
    <RootView />
  </Provider>
)

export default App
