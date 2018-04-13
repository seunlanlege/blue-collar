import React from 'react'
import { BackHandler } from 'react-native'

import AppNavigator from './navigation'

class RootView extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { navigation } = this.props
    if (navigation.index === 0) {
      return false
    }
    navigation.goBack()
    return true
  }

  render() {
    return <AppNavigator />
  }
}

export default RootView
