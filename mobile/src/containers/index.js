import React, { Component } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import { Font } from 'expo'

import { Public, Private } from './navigators'
import { SplashUI } from '../components'
import { AppStore } from './store'

const roboto = require('../../assets/Roboto-Regular.ttf')

@observer
export class MainContainer extends Component {
  constructor(props) {
    super(props)
    Font.loadAsync({
      roboto,
    }).then(() =>
      setTimeout(
        action('statusReported', () => {
          AppStore.auth.statusReported = true
        }),
        2000,
      ),
    )
  }

  render() {
    if (!AppStore.auth.statusReported) {
      return <SplashUI />
    }

    return AppStore.auth.isAuth ? <Private /> : <Public />
  }
}
