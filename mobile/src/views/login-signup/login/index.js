import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { logInActions } from '../../../redux/modules/login'
import Wrapper from '..'

const navigateMainTabAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
})

const mapStateToProps = state => state.login

const mapDispatchToProps = dispatch => ({
  logInRequestFn: payload => dispatch(logInActions.request(payload)),
  updateFieldFn: (field, value) =>
    dispatch(logInActions.updateField(field, value)),
})

const LogIn = ({ navigation, logInRequestFn, updateFieldFn, inputField }) => (
  <Wrapper
    navigation={navigation}
    mainButtonTitle="Log in with Facebook"
    minorButtonTitle="Log In"
    navigateAction={navigateMainTabAction}
    onPress={logInRequestFn}
    inputField={inputField}
    updateFieldFn={updateFieldFn}
  >
    <TouchableOpacity onPress={() => {}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
