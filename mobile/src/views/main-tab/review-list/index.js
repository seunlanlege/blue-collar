import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import images from '../../../../assets/images'

import { formatDate } from '../../../helpers'

const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginTop: '2%',
    marginBottom: '5%',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
  },
  innerContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyProfileWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  innerProfileWrapper: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  dataReview: {
    flex: 1,
    color: '#2F669C',
  },
  reviewWrapper: {
    flex: 0.2,
    flexDirection: 'row',
  },
  fullReview: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textAlign: 'right',
    color: '#9B9B9B',
  },
  secondaryText: {
    color: '#9B9B9B',
  },
})

const navigateToReview = ({ review, place }, handleSelect) =>
  handleSelect({ review, place })

const ReviewList = ({ data, index, navigation, handleSelect, places }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() =>
      navigateToReview(
        { review: data, place: places[data.placeId] },
        handleSelect,
      )
    }
  >
    {index === 0 && <View style={styles.listContainer} />}
    <View style={styles.imageContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={images.tradePlumberIcon}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.companyProfileWrapper}>
        <View style={styles.innerProfileWrapper}>
          <Text style={{ fontWeight: '700' }}>
            {places[data.placeId].formatted_address || ''}
          </Text>
          <Text style={styles.secondaryText}>
            {places[data.placeId].name || ''}
          </Text>
          {/* This will show company owner if job position Business owner */}
          {/* <Text style={styles.secondaryText}>{data.pocName}</Text> */}
          <Text style={styles.secondaryText}>
            {formatDate(data.createdAt) || ''}
          </Text>
          <Text numberOfLines={2} style={styles.dataReview}>
            {data.comments || ''}
          </Text>
        </View>

        <View
          style={{
            flex: 0.1,
          }}
        />
      </View>
    </View>
    <View style={styles.reviewWrapper}>
      <View style={styles.container}>
        <Text style={styles.fullReview}>read full review</Text>
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
