import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import epics from './epics'
import modules from './modules'
import { navigationMiddleware } from '../views'
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'login',
    'reviews',
    'places',
    'modals',
    'userDataEntry',
    'subscription',
  ],
  whilelist: ['users'],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, modules)

const middleware = [
  // process.env.NODE_ENV === `development` && createLogger(),
  navigationMiddleware,
  createEpicMiddleware(epics),
].filter(x => !!x)

const store = createStore(
  persistedReducer,
  composeFn(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store)

export default store
