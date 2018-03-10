import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    justifyContent: 'space-around',
  },
  title: {
    color: '#4A4A4A',
    fontSize: 20,
  },
  rewardItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redeemPoint: {
    height: '90%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F669C',
    borderRadius: 4,
  },
  secondaryText: {
    color: '#FFFFFF',
  },
})

const navigateToReview = (navigation, data, handleSelect) => {
  handleSelect(data)
}

const RewardList = ({ data, index, navigation, handleSelect }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigateToReview(navigation, data, handleSelect)}
  >
    {index === 0 && <View style={styles.listContainer} />}
    <View style={styles.imageContainer}>
      <View style={styles.innerContainer}>
        <Image source={images.hat} style={styles.image} />
      </View>
      <View style={styles.companyProfileWrapper}>
        <View style={styles.innerProfileWrapper}>
          <View style={styles.rewardItem}>
            <Text style={styles.title}>{data.title}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.redeemPoint}>
              <Text style={styles.secondaryText}>{data.redeem_point}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 0.1,
          }}
        />
      </View>
    </View>
  </TouchableOpacity>
)

export default RewardList
