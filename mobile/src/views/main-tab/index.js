import React from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { TabNavigator, NavigationActions } from 'react-navigation'
import images from '../../../assets/images'
import WriteReview from './write-review'
import SelectedResult from './selected-result'
import UserReview from './user-review'
import Review from './review'

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

const navigateToReviewFormAction = NavigationActions.navigate({
  routeName: 'ReviewForm',
  params: {},
})

const navigateToSearchAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Maintab' })],
})

const writeReview = navigation =>
  navigation.dispatch(navigateToReviewFormAction)

const searchReview = navigation => navigation.dispatch(navigateToSearchAction)

const MainTab = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.tabContainer}
      onPress={() => searchReview(navigation)}
    >
      <View style={styles.imgContainer}>
        <Image source={images.searchIcon} style={styles.searchIcon} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Search</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabContainer}>
      <View style={styles.inviteWrapper}>
        <Image source={images.inviteIcon} style={styles.inviteIcon} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Invite</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.writeReviewWrapper}
      onPress={() => writeReview(navigation)}
    >
      <View style={styles.innerWriteReview}>
        <Image source={images.writeReviewIcon} style={styles.writeReviewIcon} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.writeReviewText}>Write Review</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabContainer}>
      <View style={styles.imgContainer}>
        <Image source={images.rewardIcon} style={styles.rewardIcon} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Rewards</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabContainer}>
      <View style={styles.imgContainer}>
        <Image source={images.profileIcon} style={styles.imageSize} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Profile</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const MainTabNavigator = TabNavigator(
  {
    writeReview: {
      screen: WriteReview,
    },
    selectedResult: {
      screen: SelectedResult,
    },
    selectedReview: {
      screen: Review,
    },
    userReview: {
      screen: UserReview,
    },
  },
  {
    initialRouteName: 'writeReview',
    tabBarPosition: 'bottom',
    tabBarComponent: props => <MainTab {...props} />,
    tabBarOptions: {
      style: {},
    },
  },
)

export default MainTabNavigator
