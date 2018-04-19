import React from 'react'
import { Image, TextInput, View } from 'react-native'

import styles from './styles'

export const TextIconInput = ({
  icon,
  value,
  fieldName,
  handleChange,
  ...props
}) => (
  <View style={[styles.textInputContainer, { paddingBottom: 20 }]}>
    <View style={styles.textInputIcon}>
      <Image source={icon} style={{ width: 20, height: 20 }} />
    </View>
    <View style={styles.textInputInner}>
      <TextInput
        {...props}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        autoCorrect={false}
        style={styles.textInput}
        onChangeText={text => handleChange(fieldName, text)}
        value={value}
      />
    </View>
  </View>
)
