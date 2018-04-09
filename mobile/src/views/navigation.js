import React from 'react'
import { StackNavigator } from 'react-navigation'
// import Main from './main'
import ComingSoon from './coming-soon'
import LogIn from './login-signup/login'
import MainTab from './main-tab'
import OnboardTour from './onboard-tour'
import UserSubscription from './user-subscription'
import ReviewForm from './main-tab/review-form'
import SignUp from './login-signup/signup'
import UserDetail from './user-detail'
import Launch from './launch'
import Review from './main-tab/review'
import UserReview from './main-tab/user-review'
import PromoCode from './main-tab/profile-tab/promo-code'
import SubscriptionDetail from './main-tab/profile-tab/subscription-detail'
import EditProfile from './main-tab/profile-tab/edit-profile'

const AppNavigator = StackNavigator(
  {
    launch: {
      screen: Launch,
      navigationOptions: {
        header: null,
      },
    },
    onBoard: {
      screen: OnboardTour,
      navigationOptions: {
        header: null,
      },
    },
    signUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    userDetail: {
      screen: UserDetail,
      navigationOptions: {
        header: null,
      },
    },
    userSubscription: {
      screen: UserSubscription,
      navigationOptions: {
        header: null,
      },
    },
    comingSoon: {
      screen: ComingSoon,
      navigationOptions: {
        header: null,
      },
    },
    logIn: {
      screen: LogIn,
      navigationOptions: {
        header: null,
      },
    },
    mainTab: {
      screen: ({ navigation }) => (
        <MainTab screenProps={{ rootNavigation: navigation }} />
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
  {},
)

export default AppNavigator
