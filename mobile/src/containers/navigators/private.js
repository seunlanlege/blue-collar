import React from 'react'
import { Dimensions, Platform } from 'react-native'
import { StackNavigator, SafeAreaView } from 'react-navigation'

import MainTab from '../../views/main-tab'
import ReviewForm from '../../views/main-tab/review-form'
import Launch from '../../views/launch'
import Review from '../../views/main-tab/review'
import UserReview from '../../views/main-tab/user-review'
import PromoCode from '../../views/main-tab/profile-tab/promo-code'
import SubscriptionDetail from '../../views/main-tab/profile-tab/subscription-detail'
import EditProfile from '../../views/main-tab/profile-tab/edit-profile'

const { height } = Dimensions.get('window')

export const Private = StackNavigator(
  {
    launch: {
      screen: Launch,
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
    },
    reviewForm: {
      screen: ReviewForm,
    },
    review: {
      screen: Review,
    },
    userReview: {
      screen: UserReview,
    },
    promoCode: {
      screen: PromoCode,
    },
    subscriptionDetail: {
      screen: SubscriptionDetail,
    },
    editProfile: {
      screen: EditProfile,
    },
  },
  {
    initialRouteName: 'launch',
    headerMode: 'none',
  },
)
