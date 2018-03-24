import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const DEFAULT_SIZE_MULTIPLIER = 0.4
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.1

const SquareRadioButton = ({ size, isSelected, title, handleChange }) => (
  <View
    style={{
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
          borderRadius: size / size,
          borderWidth: size * DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER,
        }}
        onPress={() => handleChange(!isSelected)}
      >
        {isSelected ? (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / size,
              backgroundColor: '#CCCCCC',
            }}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  </View>
)

export default SquareRadioButton
