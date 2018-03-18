import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import RootView from './src/views'
import redux, { persistor } from './src/redux'

const App = () => (
  <Provider store={redux}>
    <PersistGate loading={null} persistor={persistor}>
      <RootView />
    </PersistGate>
  </Provider>
)

export default App
