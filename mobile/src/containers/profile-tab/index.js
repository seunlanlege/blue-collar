import { StackNavigator } from 'react-navigation'

import { ProfileMenu } from './menu-list'
import { Profile } from './profile'

export const ProfileTab = StackNavigator({
  menuList: {
    screen: ProfileMenu,
    navigationOptions: {
      header: null,
    },
  },
  profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
})
