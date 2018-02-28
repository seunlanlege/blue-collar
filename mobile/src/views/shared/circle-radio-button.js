import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DEFAULT_SIZE_MULTIPLIER = 0.4
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.1

const CircleRadioButton = ({ size, isSelected, title, handleChange }) => (
  <View
    style={{
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderColor: '#CCCCCC',
          width: size + size * DEFAULT_SIZE_MULTIPLIER,
          height: size + size * DEFAULT_SIZE_MULTIPLIER,
          borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
          borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER,
        }}
        onPress={() => handleChange()}
      >
        {isSelected ? (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: '#CCCCCC',
            }}
          />
        ) : null}
      </TouchableOpacity>
    </View>
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <Text style={{ fontSize: 11, paddingLeft: 5, color: '#CCCCCC' }}>
        {title}
      </Text>
    </View>
  </View>
)

export default CircleRadioButton
