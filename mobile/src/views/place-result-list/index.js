import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import images from '../../../assets/images'

import { actions as placeActions } from '../../redux/modules/places'

const mapDispatchToProps = dispatch => ({
  getPlace: placeId => dispatch(placeActions.getPlace(placeId)),
})

class SearchResult extends React.Component {
  handleSelect = () => {
    const {
      data,
      navigate,
      getPlace,
      updateFieldFn,
      toggleSearchFn,
    } = this.props
    const { place_id: placeId, description } = data

    if (typeof updateFieldFn === 'function') {
      updateFieldFn('vicinity', description)
      updateFieldFn('placeId', placeId)
    }
    if (typeof navigate === 'function') {
      navigate() // this will navigate to selected address
    }
    getPlace(placeId)
    toggleSearchFn(false)
  }
  render() {
    const { data, index } = this.props
    return (
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
            onPress={this.handleSelect}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <Image
                source={images.locationIconBlue}
                style={{ height: 45, width: 30 }}
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View>
                <Text
                  style={{ fontSize: 20, paddingLeft: 10, fontWeight: 'bold' }}
                >
                  {data.description}
                </Text>
              </View>
              <View>
                <Text
                  style={{ color: '#9B9B9B', fontSize: 16, paddingLeft: 10 }}
                >
                  {data.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchResult)
