import React from 'react'
import { Alert, BackHandler, Platform, SafeAreaView } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'

import AppNavigator from './navigation'

import { actions as placeActions } from '../redux/modules/places'

class RootView extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    // TODO: Move this logic into /effects/location
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      )
    } else {
      this.props.getLocation()
    }
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
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(placeActions.coordinate()),
})

export default connect(null, mapDispatchToProps)(RootView)
