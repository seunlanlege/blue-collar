import React from 'react'
import { reduxForm } from 'redux-form'
import { Modal, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { WebBrowser } from 'expo'

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
    color: '#6A696B',
    fontWeight: 'bold',
  },
  termPolicy: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#6A696B',
    color: '#6A696B',
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
})

class Signup extends React.Component {
  constructor() {
    super()
    this.state = { modalVisible: true }
  }

  displayBrowser(url) {
    this.setState({ modalVisible: false })
    WebBrowser.openBrowserAsync(url).then(_ =>
      this.setState({ modalVisible: true }),
    )
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
      <Modal visible={this.state.modalVisible} animationType="slide">
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
            <Text
              onPress={() =>
                this.displayBrowser(
                  'https://docs.google.com/document/d/1XbF4clPYGItedEQND2VG_aytTxsAlxzO_Q4Fn7yUTq4/edit?usp=sharing',
                )
              }
              style={styles.termPolicy}
            >
              Terms of Service
            </Text>{' '}
            &{' '}
            <Text
              onPress={() =>
                this.displayBrowser(
                  'https://docs.google.com/document/d/10qdT04dKHIiAZ6ZxD7iSxFN2cQ_NYaofDtoRGaIbI8Q/edit?usp=sharing',
                )
              }
              style={styles.termPolicy}
            >
              Privacy Policy
            </Text>
          </Text>
        </LoginSignupForm>
      </Modal>
    )
  }
}

const SignupForm = reduxForm({ form: 'signup' })(Signup)

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
