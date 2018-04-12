import React from 'react'
import { Image, TextInput, View } from 'react-native'

import styles from './styles'

export const TextIconInput = ({
  icon,
  handleChange,
  value,
  fieldName,

  // TODO: Clean this up.
  isTradeActive,
  isActiveSearch,

  ...props
}) => (
  <View style={styles.textInputContainer}>
    <View
      style={[
        styles.textInputIcon,
        isTradeActive || isActiveSearch
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
    <View
      style={[
        styles.textInputInner,
        isTradeActive || isActiveSearch ? { flex: 0 } : {},
      ]}
    >
      {isTradeActive || isActiveSearch ? null : (
        <TextInput
          {...props}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={text => handleChange(fieldName, text)}
        />
      )}
    </View>
  </View>
)
