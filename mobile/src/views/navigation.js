import React from 'react'
import { Dimensions, Platform } from 'react-native'
import { StackNavigator, SafeAreaView } from 'react-navigation'

import MainTab from './main-tab'
import ReviewForm from './main-tab/review-form'
import Launch from './launch'
import Review from './main-tab/review'
import UserReview from './main-tab/user-review'
import PromoCode from './main-tab/profile-tab/promo-code'
import SubscriptionDetail from './main-tab/profile-tab/subscription-detail'
import EditProfile from './main-tab/profile-tab/edit-profile'

const { height } = Dimensions.get('window')

const AppNavigator = StackNavigator(
  {
    launch: {
      screen: Launch,
      navigationOptions: {
        header: null,
      },
    },
    mainTab: {
      screen: ({ navigation }) => (
        <SafeAreaView
          style={{
            flex: 1,
            marginBottom: Platform.OS === 'ios' && height === 812 ? -70 : 0,
          }}
        >
          <MainTab screenProps={{ rootNavigation: navigation }} />
        </SafeAreaView>
      ),
      navigationOptions: {
        header: null,
      },
    },
    reviewForm: {
      screen: ReviewForm,
      navigationOptions: {
        header: null,
      },
    },
    review: {
      screen: Review,
      navigationOptions: {
        header: null,
      },
    },
    userReview: {
      screen: UserReview,
      navigationOptions: {
        header: null,
      },
    },
    promoCode: {
      screen: PromoCode,
      navigationOptions: {
        header: null,
      },
    },
    subscriptionDetail: {
      screen: SubscriptionDetail,
      navigationOptions: {
        header: null,
      },
    },
    editProfile: {
      screen: EditProfile,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'launch',
  },
)

export default AppNavigator
