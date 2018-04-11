import { StackNavigator } from 'react-navigation'

import MenuList from './menu-list'
import Profile from './profile'

const ProfileTab = StackNavigator({
  menuList: {
    screen: MenuList,
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

export default ProfileTab
