import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export class SplashUI extends Component {
  render() {
    return (
      <Image
        source={require('../../assets/splash.png')}
        style={{ height: '100%', width: '100%' }}
        resizeMode="contain"
      />
    )
  }
}
