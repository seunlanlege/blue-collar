import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import images from '../../../assets/images'
import Search from './search-tab'
import Rewards from './rewards'
import Profile from './profile-tab'
import Invite from './invite'
import ReviewForm from './review-form'

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
  imageSize: {
    width: 32,
    height: 32,
  },
  searchIcon: {
    width: 26,
    height: 26,
  },
  inviteWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  inviteIcon: {
    width: 42,
    height: 42,
  },
  writeReviewWrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2F669C',
    paddingLeft: 2,
    paddingRight: 2,
  },
  innerWriteReview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  writeReviewIcon: {
    width: 28,
    height: 28,
  },
  writeReviewText: {
    color: '#FFFEFE',
    fontSize: 12,
  },
  rewardIcon: {
    width: 34,
    height: 32,
  },
})

const MainTabNavigator = TabNavigator(
  {
    search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
            }}
            onPress={() => navigation.navigate('search')}
          >
            <View style={styles.imgContainer}>
              <Image source={images.searchIcon} style={styles.searchIcon} />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Search</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
    invite: {
      screen: Invite,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
              marginRight: 12,
            }}
            onPress={() => navigation.navigate('invite')}
          >
            <View style={styles.inviteWrapper}>
              <Image source={images.inviteIcon} style={styles.inviteIcon} />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Invite</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
    writeReview: {
      screen: ReviewForm,
      navigationOptions: ({ screenProps }) => ({
        tabBarIcon: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2F669C',
              paddingLeft: 2,
              paddingRight: 2,
              width: 80,
            }}
            onPress={() =>
              screenProps.rootNavigation.navigate({ routeName: 'reviewForm' })
            }
          >
            <View style={styles.innerWriteReview}>
              <Image
                source={images.writeReviewIcon}
                style={styles.writeReviewIcon}
              />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.writeReviewText}>Write Review</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
    rewards: {
      screen: Rewards,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
              marginLeft: 12,
            }}
            onPress={() => navigation.navigate('rewards')}
          >
            <View style={styles.imgContainer}>
              <Image source={images.rewardIcon} style={styles.rewardIcon} />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Rewards</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
    profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
            }}
            onPress={() => navigation.navigate({ routeName: 'menuList' })}
          >
            <View style={styles.imgContainer}>
              <Image source={images.profileIcon} style={styles.imageSize} />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Profile</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#2F669C',
      inactiveTintColor: '#2F669C',
      style: {
        height: TAB_HEIGHT,
        borderTopWidth: 0,
      },
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
)

export default MainTabNavigator
