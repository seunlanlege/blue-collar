import { StackNavigator } from 'react-navigation'

import MenuList from './menu-list'

const ProfileTab = StackNavigator({
  menuList: {
    screen: MenuList,
    navigationOptions: {
      header: null,
    },
  },
})

export default ProfileTab
