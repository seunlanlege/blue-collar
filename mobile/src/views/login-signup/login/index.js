import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { logInActions } from '../../../redux/modules/login'
import CONFIG from '../../../../config'
import Wrapper from '..'

const navigateMainTabAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
})

const mapStateToProps = state => ({
  login: state.login,
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  logInRequestFn: (url, payload) =>
    dispatch(logInActions.request(url, payload)),
  facebookAuth: () => dispatch(logInActions.facebookAuth()),
  updateFieldFn: (field, value) =>
    dispatch(logInActions.updateField(field, value)),
  forgotPassword: payload => dispatch(logInActions.forgotPassword(payload)),
})

class LogIn extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.login.message !== '',
      nextProps.login.message !== this.props.login.message)
    ) {
      // @TODO Show error messsage later to the client
    }
    if (nextProps.users.uid && nextProps.uid !== this.props.users.uid) {
      this.props.navigation.dispatch(navigateMainTabAction)
    }
  }
  render() {
    const {
      navigation,
      logInRequestFn,
      updateFieldFn,
      login: { inputField, loading },
      facebookAuth,
    } = this.props

    return (
      <Wrapper
        navigation={navigation}
        mainButtonTitle="Log in with Facebook"
        minorButtonTitle="Log In"
        navigateAction={navigateMainTabAction}
        onPress={logInRequestFn}
        inputField={inputField}
        updateFieldFn={updateFieldFn}
        authUrl={CONFIG.LOG_IN_PATH}
        loading={loading}
        facebookAuth={facebookAuth}
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
      </Wrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
