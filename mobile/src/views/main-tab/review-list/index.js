import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import images from '../../../../assets/images'

const styles = StyleSheet.create({
  secondaryText: {
    color: '#9B9B9B',
  },
})

const ReviewList = ({ data, index }) => (
  <TouchableOpacity style={{ flex: 1 }}>
    {index === 0 && (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          marginTop: '2%',
          marginBottom: '5%',
        }}
      />
    )}
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          source={images.tradePlumberIcon}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifysContent: 'flex-start',
        }}
      >
        <View
          style={{
            flex: 0.9,
            flexDirection: 'column',
            justifysContent: 'flex-start',
          }}
        >
          <Text>{data.company_name}</Text>
          <Text style={styles.secondaryText}>{data.company_address}</Text>
          <Text style={styles.secondaryText}>{data.owner}</Text>
          <Text style={styles.secondaryText}>{data.review_date}</Text>
          <Text numberOfLines={2} style={{ flex: 1, color: '#2F669C' }}>
            {data.review}
          </Text>
        </View>

        <View
          style={{
            flex: 0.1,
          }}
        />
      </View>
    </View>
    <View
      style={{
        flex: 0.2,
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            textAlign: 'right',
            color: '#9B9B9B',
          }}
        >
          read full review
        </Text>
      </View>

      <View
        style={{
          flex: 0.02,
        }}
      />
    </View>
  </TouchableOpacity>
)

export default ReviewList
