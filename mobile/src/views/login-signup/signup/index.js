import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import { signUpActions } from '../../../redux/modules/signup'

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

const mapStateToProps = state => state.signup

const mapDispatchToProps = dispatch => ({
  signUpRequestFn: () => dispatch(signUpActions.request()),
})

const SignUp = ({ navigation, signUpRequestFn }) => (
  <Wrapper
    navigation={navigation}
    mainButtonTitle="Sign up with Facebook"
    minorButtonTitle="Sign Up"
    onPress={signUpRequestFn}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
