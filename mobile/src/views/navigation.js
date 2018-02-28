import { StackNavigator } from 'react-navigation'
// import Main from './main'
import ComingSoon from './coming-soon'
import LogIn from './login-signup/login'
import MainTab from './main-tab'
import OnboardTour from './onboard-tour'
import PaymentDetail from './payment-detail'
import SignUp from './login-signup/signup'
import UserAttribute from './user-attribute'

const AppNavigator = StackNavigator(
  {
    Onboard: {
      screen: OnboardTour,
      navigationOptions: {
        header: null,
      },
    },
    Signup: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    UserAttribute: {
      screen: UserAttribute,
      navigationOptions: {
        header: null,
      },
    },
    PaymentDetail: {
      screen: PaymentDetail,
      navigationOptions: {
        header: null,
      },
    },
    ComingSoon: {
      screen: ComingSoon,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LogIn,
      navigationOptions: {
        header: null,
      },
    },
    Maintab: {
      screen: MainTab,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Maintab',
  },
)

export default AppNavigator
