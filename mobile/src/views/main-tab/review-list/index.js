import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import images from '../../../../assets/images'

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

const toReview = NavigationActions.navigate({
  routeName: 'Maintab',
  params: {},
  action: NavigationActions.navigate({ routeName: 'review' }),
})

const ReviewList = ({ data, index, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.dispatch(toReview)}
  >
    {index === 0 && <View style={styles.listContainer} />}
    <View style={styles.imageContainer}>
      <View style={styles.innerContainer}>
        <Image source={images.tradePlumberIcon} style={styles.image} />
      </View>
      <View style={styles.companyProfileWrapper}>
        <View style={styles.innerProfileWrapper}>
          <Text>{data.company_name}</Text>
          <Text style={styles.secondaryText}>{data.company_address}</Text>
          <Text style={styles.secondaryText}>{data.owner}</Text>
          <Text style={styles.secondaryText}>{data.review_date}</Text>
          <Text numberOfLines={2} style={styles.dataReview}>
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
