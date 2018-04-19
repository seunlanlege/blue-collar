import React from 'react'
import { reduxForm } from 'redux-form'
import { Modal, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import { logInActions } from '../../../redux/modules/login'
import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'
import LoginSignupForm from '../form' // TODO: This should be in a subfolder not above.
import UserDetail from '../../user-detail'
import UserSubscription from '../../user-subscription'
import ComingSoon from '../../coming-soon'

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
  modals: state.modals,
})

const mapDispatchToProps = dispatch => ({
  signupFn: form => dispatch(userActions.signup(form)),
  facebookAuth: () => dispatch(logInActions.facebookAuth()),
  toggleFn: () => dispatch(modalActions.toggle('signUp', false)),
})

const SignUp = ({
  user: { loading, authHeaders },
  facebookAuth,
  signupFn,
  handleSubmit,
  toggleFn,
  modals: { userDetail, subscription, comingSoon },
}) => {
  // TODO: Find a better way to handle the modal.
  if (userDetail) {
    return <UserDetail />
  }
  if (subscription) {
    return <UserSubscription />
  }
  if (comingSoon) {
    return <ComingSoon />
  }
  return (
    <Modal animationType="slide">
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
    </Modal>
  )
}

const SignupForm = reduxForm({ form: 'signup' })(SignUp)

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
