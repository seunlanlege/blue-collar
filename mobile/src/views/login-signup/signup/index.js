import React from 'react'
import { reduxForm } from 'redux-form'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import { logInActions } from '../../../redux/modules/login'
import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'
import LoginSignupForm from '../form' // TODO: This should be in a subfolder not above.
import UserDetail from '../../user-detail'

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

const mapStateToProps = state => ({
  login: state.login,
  user: state.users,
})

const mapDispatchToProps = dispatch => ({
  signupFn: form => dispatch(userActions.signup(form)),
  facebookAuth: () => dispatch(logInActions.facebookAuth()),
  toggleFn: () => dispatch(modalActions.toggle('signUp', false)),
})

class SignUp extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    //
  }
  render() {
    const {
      user: { loading, authHeaders },
      facebookAuth,
      signupFn,
      handleSubmit,
      toggleFn,
    } = this.props

    // TODO: Do this in an epic.
    if (authHeaders) {
      return <UserDetail />
    }

    return (
      <LoginSignupForm
        toggleFn={toggleFn}
        mainButtonTitle="Sign up with Facebook"
        minorButtonTitle="Sign Up"
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
