import React from 'react'
import { BackHandler } from 'react-native'

import { NavigationActions } from 'react-navigation'
import AppNavigator from './navigation'

class RootView extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, navigation } = this.props
    if (navigation.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    return <AppNavigator />
  }
}

export default RootView
