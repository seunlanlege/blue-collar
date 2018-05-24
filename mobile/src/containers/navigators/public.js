// @flow
import { StackNavigator } from 'react-navigation'
import { LoginUI, SignupUI } from '../auth'
import { OnboardUI } from '../onboard'
import { UserDetailUI } from '../userdetail'

export const Public = StackNavigator(
  {
    login: { screen: LoginUI },
    signup: { screen: SignupUI },
    onboard: { screen: OnboardUI },
    userdetail: { screen: UserDetailUI },
  },
  { initialRouteName: 'onboard', headerMode: 'none' },
)
