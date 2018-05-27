// @flow
import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import { create } from 'mobx-persist'
import { Font, Constants } from 'expo'

import { Public, Private } from './navigators'
import { SplashUI } from '../components'
import { AppStore } from './store'

const roboto = require('../../assets/Roboto-Regular.ttf')

@observer
export class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.init()
  }

  init = async () => {
    const hydrate = create({
      storage: AsyncStorage,
    })

    await Font.loadAsync({ roboto })
    await hydrate('auth', AppStore.auth)

    action('statusReported', () => {
      AppStore.auth.statusReported = true
    })()
  }

  render() {
    if (!AppStore.auth.statusReported) {
      return <SplashUI />
    }

    return (
      <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        {AppStore.auth.isAuth ? <Private /> : <Public />}
      </View>
    )
  }
}
