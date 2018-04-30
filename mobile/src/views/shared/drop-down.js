import React from 'react'
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import IMAGES from '../../../assets/images'

import CONFIG from '../../../config'

const DropDown = props => (
  <Modal animationType="slide">
    <View
      style={{
        flex: 1,
        top: 20,
        alignItems: 'flex-start',
        paddingTop: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => props.toggleFn(false)}
        style={{
          flexDirection: 'row',
          paddingBottom: 16,
          paddingLeft: 10,
        }}
      >
        <Image
          source={IMAGES.back}
          style={{ marginTop: 5, height: 10, width: 10 }}
          resizeMode="contain"
        />
        <View style={{ paddingLeft: 5 }}>
          <Text style={{ color: '#4B7295' }}>Back</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{ borderColor: '#4B7295', borderWidth: 0.5, width: '100%' }}
      />
      <ScrollView style={{ width: '100%', marginBottom: 20 }}>
        {CONFIG.TRADE_OPTIONS.map(item => (
          <TouchableOpacity
            onPress={() => props.handleSelect(props.fieldName, item)}
            key={item.name}
            style={{
              justifyContent: 'flex-start',
              padding: 20,
            }}
          >
            <Text style={{ textAlign: 'left', fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </Modal>
)

export default DropDown
