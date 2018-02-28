import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import images from '../../../assets/images'
import styles from '../shared/styles'

const ComingSoon = () => (
  <View style={styles.container}>
    <View
      style={{
        flex: 0.2,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 22, color: '#2F669C', textAlign: 'center' }}>
        Blue Collar List Coming Soon to Your Area
      </Text>
    </View>
    <View
      style={{
        flex: 0.3,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={images.comingSoon} />
    </View>
    <View
      style={{
        flex: 0.25,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#2F669C' }}>
        {"It looks like we haven't launched yet in your area. Enjoy your free "}
        {"trial and we'll notify you by email when we launch in your region!"}
      </Text>
    </View>
    <View
      style={{
        flex: 0.3,
        width: '80%',
      }}
    >
      <View
        style={{
          flex: 0.75,
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity
          style={{
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2F669C',
            borderColor: '#4369B0',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: '#FFFFFF' }}>
            Earn $ Become a BCL Ambassador
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#2F669C',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: '#2F669C', fontSize: 20 }}>
            Proceed to Free Trial
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default ComingSoon
