import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { logInActions } from '../../../../redux/modules/login'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    flex: 0.18,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 30,
    textAlign: 'left',
    fontSize: 30,
  },
  buttonWrapper: {
    flex: 0.3,
    width: '90%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#32679A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 55,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
})

const mapStateToProps = state => state.login

const mapDispatchToProps = dispatch => ({
  logOutFn: () => dispatch(logInActions.logOutRequest()),
})

const logOutUser = (screenProps, logOutFn) => {
  const toLogin = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'logIn' })],
  })
  screenProps.rootNavigation.dispatch(toLogin)
  logOutFn()
}

const ProfileMenu = ({ toLogin, logOutFn, screenProps, navigation }) => (
  <View style={styles.container}>
    <View style={[styles.contentWrapper, { top: 10 }]}>
      <TouchableOpacity
        onPress={() => navigation.navigate({ routeName: 'profile' })}
      >
        <Text style={styles.title}>profile</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentWrapper}>
      <TouchableOpacity
        onPress={() =>
          screenProps.rootNavigation.navigate({
            routeName: 'subscriptionDetail',
          })
        }
      >
        <Text style={styles.title}>subscription details</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.contentWrapper}>
      <TouchableOpacity
        onPress={() =>
          screenProps.rootNavigation.navigate({ routeName: 'promoCode' })
        }
      >
        <Text style={styles.title}>promo code</Text>
      </TouchableOpacity>
    </View>
    <View style={[styles.contentWrapper, { borderBottomWidth: 0 }]}>
      <TouchableOpacity onPress={() => logOutUser(screenProps, logOutFn)}>
        <Text style={styles.title}>log out</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Blue Collar List</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)
