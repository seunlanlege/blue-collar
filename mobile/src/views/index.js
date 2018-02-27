import React from 'react'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigator from './navigation'

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
)

const addListener = createReduxBoundAddListener('root')

const NavigationWithRedux = ({ navigation, dispatch }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: navigation,
      addListener,
    })}
  />
)

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(NavigationWithRedux)
