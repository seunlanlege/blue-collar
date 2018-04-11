import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

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

const mapStateToProps = state => state.users

const mapDispatchToProps = dispatch => ({
  toMainTab: () =>
    dispatch(NavigationActions.navigate({ routeName: 'mainTab' })),
  toOnBoard: () =>
    dispatch(NavigationActions.navigate({ routeName: 'onBoard' })),
})

class Launch extends React.Component {
  componentDidMount() {
    const { userId, accessToken, toMainTab, toOnBoard } = this.props
    if (userId && accessToken) {
      toMainTab()
    } else {
      toOnBoard()
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Launch)
