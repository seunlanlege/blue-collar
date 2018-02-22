import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  takeTheTour: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#3d6587',
    fontWeight: 'bold',
  },
  signUpFacebook: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4369B0',
    borderRadius: 6,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textInputInner: {
    flex: 1,
    flexDirection: 'column',
  },
  textInputIcon: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#CCCCCC',
  },
  textInput: {
    height: 45,
    paddingLeft: 12,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  termPolicy: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#CCCCCC',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  signUpButton: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4369B0',
    borderRadius: 6,
  },
})

const SignUp = () => (
  <View
    style={{
      flex: 1,
      top: 20,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <View
      style={{
        flex: 0.2,
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity>
        <Text style={styles.takeTheTour}>Take The Tour</Text>
      </TouchableOpacity>
    </View>
    <View
      style={{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={images.logo} style={{ width: 120, height: 120 }} />
    </View>
    <View
      style={{
        flex: 1,
        width: '80%',
        justifyContent: 'space-around',
      }}
    >
      <TouchableOpacity style={styles.signUpFacebook}>
        <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
          Sign up with Facebook
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, borderTopWidth: 1, borderColor: '#F2F2F4' }} />
        <View
          style={{
            flex: 0.4,
            alignItems: 'center',
            justifyContent: 'center',
            top: -7,
          }}
        >
          <Text style={{ fontSize: 12, color: '#D1D2D4' }}>OR</Text>
        </View>
        <View style={{ flex: 1, borderTopWidth: 1, borderColor: '#F2F2F4' }} />
      </View>
    </View>
    <View
      style={{
        flex: 1.5,
        width: '80%',
        justifyContent: 'space-around',
      }}
    >
      <View style={styles.textInputContainer}>
        <Image source={images.email} style={styles.textInputIcon} />
        <View style={styles.textInputInner}>
          <TextInput
            placeholder="Email Address"
            autoCapitalize="none"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <Image source={images.password} style={styles.textInputIcon} />
        <View style={styles.textInputInner}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <Text
          style={{
            fontSize: 9,
            textAlign: 'center',
            color: '#CCCCCC',
            fontWeight: 'bold',
          }}
        >
          By signing up, you agree to our{' '}
          <Text onPress={() => {}} style={styles.termPolicy}>
            Term
          </Text>{' '}
          &{' '}
          <Text onPress={() => {}} style={styles.termPolicy}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
    <View
      style={{
        flex: 1.2,
        width: '80%',
        justifyContent: 'flex-start',
      }}
    >
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={{ color: '#4369B0', fontWeight: '500' }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default SignUp
