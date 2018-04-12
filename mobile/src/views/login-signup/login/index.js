import React from 'react'
import { reduxForm } from 'redux-form'
import { TouchableOpacity, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { logInActions } from '../../../redux/modules/login'
import { actions as userActions } from '../../../redux/modules/users'
import LoginSignupForm from '../form' // TODO: This should be in a subfolder not above.

const navigateMainTabAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
})

// This was copied and pasted! Cleanup later...
const toUserAttribute = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'userDetail' })],
})

const mapStateToProps = state => ({
  login: state.login,
  user: state.users,
})

const mapDispatchToProps = dispatch => ({
  loginFn: form => dispatch(userActions.login(form)),
  facebookAuth: () => dispatch(logInActions.facebookAuth()),
  forgotPassword: payload => dispatch(logInActions.forgotPassword(payload)),
})

class LogIn extends React.Component {
  componentWillReceiveProps(nextProps) {
    // Using "firstName" to determine if profile filled out.
    // Need to figure out  a better way later...
    if (nextProps.user.authHeaders && nextProps.user.firstName) {
      this.props.navigation.dispatch(navigateMainTabAction)
    } else if (nextProps.user.authHeaders) {
      this.props.navigation.dispatch(toUserAttribute)
    }
  }
  render() {
    const {
      navigation,
      user: { loading },
      facebookAuth,
      loginFn,
      handleSubmit,
    } = this.props

    return (
      <LoginSignupForm
        navigation={navigation}
        mainButtonTitle="Log in with Facebook"
        minorButtonTitle="Log In"
        navigateAction={navigateMainTabAction}
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
    )
  }
}

const LoginForm = reduxForm({ form: 'signup' })(LogIn)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
