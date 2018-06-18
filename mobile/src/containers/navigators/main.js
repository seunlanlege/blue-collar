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
import { SearchStack } from '../search-tab'
import { Rewards } from '../rewards'
import { ProfileTab } from '../profile-tab'
import { Invite } from '../invite'
import { WriteReview } from '../review-form'

const window = Dimensions.get('window')

const TAB_HEIGHT = window.width / 6

const styles = StyleSheet.create({
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

const handeSearchNav = (navigation, screenProps) => {
  const { state } = navigation
  const { rootNavigation } = screenProps
  if (state.index === 1) {
    rootNavigation.navigate({ routeName: 'mainTab' })
  } else {
    navigation.navigate({ routeName: 'search' })
  }
}

export const MainTabNavigator = TabNavigator(
  {
    search: {
      screen: SearchStack,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
              backgroundColor: '#F7F7F7',
              opacity: focused ? 1 : 0.7,
            }}
            onPress={() => handeSearchNav(navigation, screenProps)}
          >
            <View style={styles.imgContainer}>
              <Image
                // TODO change this to appropriate icon later
                source={images.searchIcon}
                style={styles.searchIcon}
                resizeMode="contain"
              />
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
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
              marginRight: 12,
              paddingTop: 10,
              backgroundColor: '#F7F7F7',
              opacity: focused ? 1 : 0.7,
            }}
            onPress={() => navigation.navigate('invite')}
          >
            <View style={styles.inviteWrapper}>
              <Image
                source={images.inviteIcon}
                style={styles.inviteIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Invite</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
    writeReview: {
      screen: WriteReview,
      navigationOptions: ({ screenProps }) => ({
        tabBarIcon: ({ focused }) => (
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
                resizeMode="contain"
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
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
              marginLeft: 14,
              backgroundColor: '#F7F7F7',
              opacity: focused ? 1 : 0.7,
            }}
            onPress={() => navigation.navigate('rewards')}
          >
            <View style={styles.imgContainer}>
              <Image
                source={images.rewardIcon}
                style={styles.rewardIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Rewards</Text>
            </View>
          </TouchableOpacity>
        ),
      }),
    },
    profile: {
      screen: ProfileTab,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: TAB_HEIGHT,
              backgroundColor: '#F7F7F7',
              opacity: focused ? 1 : 0.7,
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
