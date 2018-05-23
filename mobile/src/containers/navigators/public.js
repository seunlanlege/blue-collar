import { StackNavigator } from 'react-navigation'
import { LoginUI, SignupUI } from '../auth'
import { OnboardUI } from '../onboard'

export const Public = StackNavigator(
  {
    login: { screen: LoginUI },
    signup: { screen: SignupUI },
    onboard: { screen: OnboardUI },
  },
  { initialRouteName: 'onboard', headerMode: 'none' },
)
