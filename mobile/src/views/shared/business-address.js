import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const handleSelect = (handleChange, formattedAddress, placeId, name) => {
  handleChange(formattedAddress, placeId, name)
}

const BusinessAddress = ({ data, index, handleChange }) => (
  <ScrollView>
    {index === 0 && (
      <View
        style={{
          height: 1,
          backgroundColor: '#FFF',
          marginBottom: '4%',
        }}
      />
    )}
    <View style={{ width: '100%', justifyContent: 'space-between' }}>
      <TouchableOpacity
        onPress={() =>
          handleSelect(
            handleChange,
            data.formattedAddress,
            data.place_id,
            data.name,
          )
        }
      >
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#000', fontSize: 12, paddingLeft: 10 }}>
            {data.formattedAddress}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
)

export default BusinessAddress
