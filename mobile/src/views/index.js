import { StackNavigator } from 'react-navigation'

// import Main from './main'
import OnboardTour from './onboard-tour'
import SignUp from './login-signup/signup'
import LogIn from './login-signup/login'
import MainTab from './main-tab'

const RootView = StackNavigator(
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

export default RootView
