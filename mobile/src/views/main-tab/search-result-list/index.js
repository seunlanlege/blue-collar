import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import images from '../../../../assets/images'

const SearchResult = ({ data, index }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {index === 0 && (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          marginBottom: '4%',
        }}
      />
    )}
    <View style={{ width: '90%', justifyContent: 'space-between' }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          <Image source={images.locationIconBlue} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View>
            <Text style={{ fontSize: 20, paddingLeft: 10 }}>{data.place}</Text>
          </View>
          <View>
            <Text style={{ color: '#9B9B9B', fontSize: 16, paddingLeft: 10 }}>
              {data.city}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)

export default SearchResult
