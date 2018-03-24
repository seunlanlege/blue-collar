import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { logInActions } from '../../../redux/modules/login'
import CONFIG from '../../../../config'
import Wrapper from '..'

const styles = StyleSheet.create({
  topWrapper: {
    fontSize: 9,
    textAlign: 'center',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  termPolicy: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#CCCCCC',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
})

const toUserAttribute = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'userAttribute' })],
})

const mapStateToProps = state => ({
  login: state.login,
  users: state.user,
})

const mapDispatchToProps = dispatch => ({
  signUpRequestFn: (url, payload) =>
    dispatch(logInActions.request(url, payload)),
  facebookAuth: () => dispatch(logInActions.facebookAuth()),
  updateFieldFn: (field, value) =>
    dispatch(logInActions.updateField(field, value)),
})

class SignUp extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.users.uid && nextProps.uid !== this.props.users.uid) {
      this.props.navigation.dispatch(toUserAttribute)
    }
  }

  render() {
    const {
      navigation,
      signUpRequestFn,
      updateFieldFn,
      login: { inputField, loading },
      facebookAuth,
    } = this.props
    const signUpPayload = Object.assign({}, inputField, {
      password_confirmation: inputField.password,
    })

    return (
      <Wrapper
        navigation={navigation}
        mainButtonTitle="Sign up with Facebook"
        minorButtonTitle="Sign Up"
        navigateAction={toUserAttribute}
        onPress={signUpRequestFn}
        inputField={signUpPayload}
        updateFieldFn={updateFieldFn}
        authUrl={CONFIG.SIGN_UP_URL}
        loading={loading}
        facebookAuth={facebookAuth}
      >
        <Text style={styles.topWrapper}>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
