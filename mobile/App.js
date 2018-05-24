import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Sentry from 'sentry-expo'

import CONFIG from './config'
import { MainContainer } from './src/containers'
import redux, { persistor } from './src/redux'

// Enables Sentry Sentry.enableInExpoDevelopment = true
Sentry.config(CONFIG.SENTRY_DSN).install()

const App = () => (
  <Provider store={redux}>
    <PersistGate loading={null} persistor={persistor}>
      <MainContainer />
    </PersistGate>
  </Provider>
)

export default App
