import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

const Option = ({ style, styleText, children }) => (
  <View style={[styles.container, style]}>
    <Text style={styleText}>{children}</Text>
  </View>
)

export default Option
