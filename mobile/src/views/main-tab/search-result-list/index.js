import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import images from '../../../../assets/images'

import { searchActions } from '../../../redux/modules/search'

const toSelectedResult = NavigationActions.navigate({
  routeName: 'selectedResult',
  params: {},
})

const handleSelect = (navigation, getPlace, placeId) => {
  getPlace(placeId)
  navigation.dispatch(toSelectedResult)
}

const mapDispatchToProps = dispatch => ({
  getPlace: placeId => dispatch(searchActions.getPlace(placeId)),
})

const SearchResult = ({ data, index, navigation, getPlace }) => (
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
        onPress={() => handleSelect(navigation, getPlace, data.place_id)}
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
            <Text style={{ fontSize: 20, paddingLeft: 10 }}>{data.name}</Text>
          </View>
          <View>
            <Text style={{ color: '#9B9B9B', fontSize: 16, paddingLeft: 10 }}>
              {data.vicinity}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)

export default connect(null, mapDispatchToProps)(SearchResult)
