import React from 'react'
import { reduxForm } from 'redux-form'
import { Alert, Modal, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

import { logInActions } from '../../../redux/modules/login'
import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'
import LoginSignupForm from '../form' // TODO: This should be in a subfolder not above.

const mapStateToProps = state => ({
  login: state.login,
  user: state.users,
})

const mapDispatchToProps = dispatch => ({
  loginFn: form => dispatch(userActions.login(form)),
  facebookAuth: () => dispatch(userActions.fbLogin()),
  forgotPassword: payload => dispatch(logInActions.forgotPassword(payload)),
  toggleFn: () => dispatch(modalActions.toggle('logIn', false)),
  clearError: () => dispatch(userActions.clearError()),
})

class LogIn extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { message } = nextProps.user
    if (message) {
      Alert.alert('Error', message, [{ text: 'Close', onPress: () => {} }])
      this.props.clearError()
    }
  }

  render() {
    const {
      toggleFn,
      user: { loading },
      facebookAuth,
      loginFn,
      handleSubmit,
    } = this.props
    return (
      <Modal animationType="slide">
        <LoginSignupForm
          toggleFn={toggleFn}
          mainButtonTitle="Log in with Facebook"
          minorButtonTitle="Log In"
          loading={loading}
          facebookAuth={facebookAuth}
          onSubmit={handleSubmit(loginFn)}
        >
          {/* @TODO change this to real payload later */}
          <TouchableOpacity
            onPress={() =>
              this.props.forgotPassword({ email: 'kristo@gmail.com' })
            }
          >
            <Text
              style={{
                fontSize: 9,
                textAlign: 'center',
                color: '#CCCCCC',
                fontWeight: 'bold',
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
        </LoginSignupForm>
      </Modal>
    )
  }
}

const LoginForm = reduxForm({ form: 'signup' })(LogIn)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
