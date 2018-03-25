import React from 'react'
import { Image, TextInput, View } from 'react-native'

import styles from './styles'

const CustomTextInput = ({
  icon,
  placeholder,
  handleChange,
  value,
  fieldName,
  isTradeActive,
}) => (
  <View style={styles.textInputContainer}>
    <View
      style={[
        styles.textInputIcon,
        isTradeActive
          ? {
              justifyContent: 'flex-start',
              borderWidth: 0,
              borderRightWidth: 0,
              opacity: 0,
            }
          : {},
      ]}
    >
      <Image source={icon} style={{ width: 20, height: 20 }} />
    </View>
    <View style={[styles.textInputInner, isTradeActive ? { flex: 0 } : {}]}>
      {isTradeActive ? null : (
        <TextInput
          placeholder={placeholder}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={text => handleChange(fieldName, text)}
          value={value}
        />
      )}
    </View>
  </View>
)

export default CustomTextInput
