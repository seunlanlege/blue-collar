import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
})

const LoginButton = ({ onPress, children }) => (
  <View style={styles.buttonWrapper}>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        onPress={() => onPress('signUp', true)}
        style={[
          styles.button,
          {
            flex: 0.4,
            backgroundColor: '#32679A',
          },
        ]}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress('logIn', true)}
        style={[
          styles.button,
          {
            flex: 0.36,
            borderWidth: 1,
            borderColor: '#32679A',
            backgroundColor: '#FFFFFF',
          },
        ]}
      >
        <Text
          style={{
            color: '#32679A',
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>
      {children}
    </View>
    <View style={{ flex: 0.5 }} />
  </View>
)

export default LoginButton
