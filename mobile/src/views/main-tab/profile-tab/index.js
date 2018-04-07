import { StackNavigator } from 'react-navigation'

import MenuList from './menu-list'
import PromoCode from './promo-code'

const ProfileTab = StackNavigator({
  menuList: {
    screen: MenuList,
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
})

export default ProfileTab
