import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const SelectItem = ({ toggleFn, icon, value, placeholder, rightIcon }) => (
  <TouchableOpacity
    onPress={() => toggleFn(true)}
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    }}
  >
    <View style={[styles.textInputIcon, { borderRightWidth: 0 }]}>
      {icon ? (
        <Image
          source={icon}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      ) : null}
    </View>
    <View style={{ width: '86%', borderWidth: 1, borderColor: '#CCCCCC' }}>
      <Text
        style={{
          paddingTop: 10,
          paddingLeft: 10,
          color: value ? '#000' : '#CCCCCC',
        }}
      >
        {value || placeholder}
      </Text>
    </View>
    <View
      style={{
        flex: 1,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={rightIcon} resizeMode="contain" />
    </View>
  </TouchableOpacity>
)

export default SelectItem
