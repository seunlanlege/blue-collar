import { StackNavigator } from 'react-navigation'
// import Main from './main'
import LogIn from './login-signup/login'
import MainTab from './main-tab'
import OnboardTour from './onboard-tour'
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
