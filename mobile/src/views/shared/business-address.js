import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

const handleSelect = (handleChange, vicinity, placeId) => {
  handleChange(vicinity, placeId)
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
        onPress={() => handleSelect(handleChange, data.vicinity, data.place_id)}
      >
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: '#000', fontSize: 12, paddingLeft: 10 }}>
            {data.vicinity}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
)

export default connect(null, null)(BusinessAddress)
