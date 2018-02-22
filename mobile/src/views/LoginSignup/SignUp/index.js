import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Wrapper from '../Wrapper'

const styles = StyleSheet.create({
  termPolicy: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#CCCCCC',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
})

const SignUp = () => (
  <Wrapper mainButtonTitle="Sign up with Facebook" minorButtonTitle="Sign Up">
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
