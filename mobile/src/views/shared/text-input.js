import React from 'react'
import { Image, TextInput, View } from 'react-native'

import styles from './styles'

const CustomTextInput = ({
  icon,
  placeholder,
  handleChange,
  value,
  fieldName,
}) => (
  <View style={styles.textInputContainer}>
    <View style={styles.textInputIcon}>
      <Image source={icon} style={{ width: 20, height: 20 }} />
    </View>
    <View style={styles.textInputInner}>
      <TextInput
        placeholder={placeholder}
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

export default CustomTextInput
