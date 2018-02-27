import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { TabNavigator } from 'react-navigation'
import images from '../../../assets/images'
import WriteReview from './write-review'

const window = Dimensions.get('window')

const TAB_HEIGHT = window.width / 6

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFEFE',
    height: TAB_HEIGHT,
  },
  tabContainer: {
    width: TAB_HEIGHT,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  titleWrapper: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#2F669C',
    fontSize: 12,
  },
})

const MainTab = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.tabContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={images.searchIcon}
          style={{
            width: 26,
            height: 26,
          }}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Search</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabContainer}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <Image
          source={images.inviteIcon}
          style={{
            width: 42,
            height: 42,
          }}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Invite</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2F669C',
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Image
          source={images.writeReviewIcon}
          style={{ width: 28, height: 28 }}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={{ color: '#FFFEFE', fontSize: 12 }}>Write Review</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={images.rewardIcon}
          style={{
            width: 34,
            height: 32,
          }}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Rewards</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={images.profileIcon}
          style={{
            width: 32,
            height: 32,
          }}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Profile</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const MainTabNavigator = TabNavigator(
  {
    testing: {
      screen: WriteReview,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => <MainTab />,
    tabBarOptions: {
      style: {},
    },
  },
)

export default MainTabNavigator
