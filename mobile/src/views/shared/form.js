import React from 'react'
import { Image, TextInput, View } from 'react-native'

import styles from './styles'

export const TextIconInput = ({
  icon,
  value,
  fieldName,
  handleChange,

  // TODO: Clean this up.
  isActiveSearch,

  ...props
}) => (
  <View style={[styles.textInputContainer, { paddingBottom: 20 }]}>
    <View
      style={[
        styles.textInputIcon,
        isActiveSearch
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
    <View style={[styles.textInputInner, isActiveSearch ? { flex: 0 } : {}]}>
      {isActiveSearch ? null : (
        <TextInput
          {...props}
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
