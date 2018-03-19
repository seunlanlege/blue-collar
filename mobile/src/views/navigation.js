import { StackNavigator } from 'react-navigation'
// import Main from './main'
import ComingSoon from './coming-soon'
import LogIn from './login-signup/login'
import MainTab from './main-tab'
import OnboardTour from './onboard-tour'
import PaymentDetail from './payment-detail'
import ReviewForm from './main-tab/review-form'
import SignUp from './login-signup/signup'
import UserAttribute from './user-attribute'
import Launch from './launch'

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
    userAttribute: {
      screen: UserAttribute,
      navigationOptions: {
        header: null,
      },
    },
    paymentDetail: {
      screen: PaymentDetail,
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
      screen: MainTab,
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
  },
  {},
)

export default AppNavigator
