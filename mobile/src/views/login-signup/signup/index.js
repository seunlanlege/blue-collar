import React from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import Expo from 'expo'

import Wrapper from '..'

const styles = StyleSheet.create({
  termPolicy: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#CCCCCC',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
})

async function fbSignUp() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '337883893384348',
    {
      permissions: ['public_profile', 'email'],
    },
  )
  if (type === 'success') {
    /* eslint-disable */
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`,
    )
    /* eslint-enable */
    const data = await response.json()
    Alert.alert('Logged in!', `Hi ${data.name}!`)
  }
}

const SignUp = ({ navigation }) => (
  <Wrapper
    navigation={navigation}
    mainButtonTitle="Sign up with Facebook"
    minorButtonTitle="Sign Up"
    onPress={fbSignUp}
  >
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
  </Wrapper>
)

export default SignUp
