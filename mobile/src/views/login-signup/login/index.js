import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import Wrapper from '..'

const LogIn = ({ navigation }) => (
  <Wrapper
    navigation={navigation}
    mainButtonTitle="Log in with Facebook"
    minorButtonTitle="Log In"
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
