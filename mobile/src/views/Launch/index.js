import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29ADDF',
  },
  image: {
    height: 150,
    width: 150,
  },
  textWrapper: {
    marginTop: 20,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
})

class Launch extends React.Component {
  componentDidMount() {
    setTimeout(
      () => this.props.navigation.navigate({ routeName: 'onBoard' }),
      1500,
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={images.launchLogo} style={styles.image} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Contractors Helping Contractors</Text>
        </View>
      </View>
    )
  }
}

export default Launch
