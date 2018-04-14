import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DEFAULT_SIZE_MULTIPLIER = 0.4
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.1

const CircleRadioButton = ({
  size,
  isSelected,
  title,
  value,
  handleChange,
  width,
  fontSize,
}) => (
  <View
    style={{
      width: width || '100%',
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
        onPress={() => handleChange(Number(value))}
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
      <Text style={{ fontSize, paddingLeft: 5, color: '#CCCCCC' }}>
        {title}
      </Text>
    </View>
  </View>
)

export default CircleRadioButton
