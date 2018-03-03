import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Wrapper from '..'

const navigateMainTabAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Maintab' })],
})

// @TODO Connect this effect login
// const loginRequestFn = () =>

const LogIn = ({ navigation }) => (
  <Wrapper
    navigation={navigation}
    mainButtonTitle="Log in with Facebook"
    minorButtonTitle="Log In"
    navigateAction={navigateMainTabAction}
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

export default LogIn
