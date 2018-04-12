import React from 'react'
import { reduxForm } from 'redux-form'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { logInActions } from '../../../redux/modules/login'
import { actions as userActions } from '../../../redux/modules/users'
import LoginSignupForm from '../form' // TODO: This should be in a subfolder not above.

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
  actions: [NavigationActions.navigate({ routeName: 'userDetail' })],
})

const mapStateToProps = state => ({
  login: state.login,
  user: state.users,
})

const mapDispatchToProps = dispatch => ({
  signupFn: form => dispatch(userActions.signup(form)),
  facebookAuth: () => dispatch(logInActions.facebookAuth()),
})

class SignUp extends React.Component {
  componentWillReceiveProps(nextProps) {
    // TODO: Do this in an epic that listens for SIGNUP_FULFILLED
    if (nextProps.user.uid && nextProps.uid !== this.props.user.uid) {
      this.props.navigation.dispatch(toUserAttribute)
    }
  }

  render() {
    const {
      navigation,
      user: { loading },
      facebookAuth,
      signupFn,
      handleSubmit,
    } = this.props

    return (
      <LoginSignupForm
        navigation={navigation}
        mainButtonTitle="Sign up with Facebook"
        minorButtonTitle="Sign Up"
        navigateAction={toUserAttribute}
        loading={loading}
        facebookAuth={facebookAuth}
        onSubmit={handleSubmit(signupFn)}
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
      </LoginSignupForm>
    )
  }
}

const SignupForm = reduxForm({ form: 'signup' })(SignUp)

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
