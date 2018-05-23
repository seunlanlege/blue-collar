import React, { Component } from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import { Font } from 'expo'

import { Public, Private } from './navigators'
import { auth } from './auth'
import { SplashUI } from '../components'

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
          auth.statusReported = true
        }),
        2000,
      ),
    )
  }

  render() {
    if (!auth.statusReported) {
      return <SplashUI />
    }

    return auth.isAuth ? <Private /> : <Public />
  }
}
