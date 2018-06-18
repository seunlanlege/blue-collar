// @flow
import React from 'react'
import { Dimensions, Platform } from 'react-native'
import { StackNavigator, SafeAreaView } from 'react-navigation'

import { MainTabNavigator } from './main'
import { WriteReview } from '../review-form'
import { Review } from '../review'
import { UserReview } from '../user-review'
import { PromoCode } from '../profile-tab/promo-code'
import { SubscriptionDetail } from '../profile-tab/subscription-detail'
import { EditProfile } from '../profile-tab/edit-profile'

const { height } = Dimensions.get('window')

export const Private = StackNavigator(
  {
    mainTab: {
      screen: ({ navigation }) => (
        <SafeAreaView
          style={{
            flex: 1,
            marginBottom: Platform.OS === 'ios' && height === 812 ? -70 : 0,
          }}
        >
          <MainTabNavigator screenProps={{ rootNavigation: navigation }} />
        </SafeAreaView>
      ),
    },
    reviewForm: {
      screen: WriteReview,
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
    initialRouteName: 'mainTab',
    headerMode: 'none',
  },
)
