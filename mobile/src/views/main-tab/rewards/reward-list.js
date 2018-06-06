import React from 'react'
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { notifyReward } from '../../../redux/effects/slack-notify'

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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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

const RewardList = ({
  data,
  index,
  navigation,
  handleSelect,
  onRedeem,
  loading,
  length,
  contestDetails,
}) => (
  <View style={styles.container}>
    {index === 0 && <View style={styles.listContainer} />}
    <View style={styles.imageContainer}>
      <View style={styles.innerContainer}>
        <Image source={data.icon} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.companyProfileWrapper}>
        <View style={styles.innerProfileWrapper}>
          <View style={styles.rewardItem}>
            <Text style={styles.title}>{`${data.name}`}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            {loading ? (
              <ActivityIndicator size="large" color="#2F669C" />
            ) : (
              <TouchableOpacity
                style={[styles.redeemPoint]}
                onPress={() => {
                  onRedeem(data.id, data.points, 3)
                  notifyReward(data)
                }}
              >
                <Text style={styles.secondaryText}>
                  {`${data.redeemType} ${data.points} pts`}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
    {index === length && contestDetails}
  </View>
)

export default RewardList
