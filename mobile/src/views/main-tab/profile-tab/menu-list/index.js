import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { WebBrowser } from 'expo'

import { actions } from '../../../../redux/modules/users'

import CONFIG from '../../../../../config'

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
  logOutFn: () => dispatch(actions.logout()),
})

const ProfileMenu = ({ logOutFn, screenProps, navigation }) => (
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
    <View style={styles.contentWrapper}>
      <TouchableOpacity
        onPress={() => {
          WebBrowser.openBrowserAsync(
            'https://docs.google.com/document/d/1XbF4clPYGItedEQND2VG_aytTxsAlxzO_Q4Fn7yUTq4/edit?usp=sharing',
          )
        }}
      >
        <Text style={styles.title}>terms & conditions</Text>
      </TouchableOpacity>
    </View>
    <View style={[styles.contentWrapper, { borderBottomWidth: 0 }]}>
      <TouchableOpacity onPress={logOutFn}>
        <Text style={styles.title}>log out</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(CONFIG.SUPPORT_URL)}
      >
        <Text style={styles.buttonText}>Contact Blue Collar Lists</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)
