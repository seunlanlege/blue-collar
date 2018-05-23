import React from 'react'
import { reduxForm } from 'redux-form'
import { Alert, Modal, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'
import LoginSignupForm from '../form' // TODO: This should be in a subfolder not above.
import UserDetail from '../../user-detail'
import Subscription from '../../subscription'
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
  places: state.places,
})

const mapDispatchToProps = dispatch => ({
  signupFn: form => dispatch(userActions.signup(form)),
  facebookAuth: () => dispatch(userActions.fbSignup()),
  toggleFn: () => dispatch(modalActions.toggle('signUp', false)),
  clearError: () => dispatch(userActions.clearError()),
})

class SignUp extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { message } = nextProps.user
    if (message) {
      Alert.alert('Error', message, [{ text: 'Close', onPress: () => {} }])
      this.props.clearError()
    }
  }
  render() {
    const {
      user: { loading },
      facebookAuth,
      signupFn,
      handleSubmit,
      toggleFn,
      modals: { userDetail, subscription, comingSoon },
    } = this.props
    if (userDetail) {
      return <UserDetail />
    }
    if (subscription) {
      return <Subscription />
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
          facebook
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
}

const SignupForm = reduxForm({ form: 'signup' })(SignUp)

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
