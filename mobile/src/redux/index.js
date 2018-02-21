import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import epics from './epics'
import modules from './modules'

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const middleware = applyMiddleware(
  process.env.NODE_ENV === `development` && createLogger(),
  createEpicMiddleware(epics),
)
const store = createStore(modules, composeFn(middleware))

export default store
