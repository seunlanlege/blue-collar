import React from 'react'
import { TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

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
      <View style={styles.iconWrapper}>
        <FontAwesome name={icon} size={25} color="#CCC" />
      </View>
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
