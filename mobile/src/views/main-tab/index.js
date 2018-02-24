import React from 'react'
import { Dimensions, Image, View, Text, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation'
import images from '../../../assets/images'

const Screen1 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'red',
    }}
  >
    <TouchableOpacity>
      <Text>Hello world</Text>
    </TouchableOpacity>
  </View>
)

const window = Dimensions.get('window')

const TAB_HEIGHT = window.width / 6

const MainTabNavigator = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFFEFE',
      height: TAB_HEIGHT,
    }}
  >
    <TouchableOpacity>
      <Image source={images.searchIcon} style={{ width: 24, height: 24 }} />
      <Text style={{ color: '#2F669C', fontSize: 10 }}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Image source={images.inviteIcon} style={{ width: 32, height: 32 }} />
      <Text style={{ color: '#2F669C', fontSize: 12 }}>Invite</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2F669C',
      }}
    >
      <Image
        source={images.writeReviewIcon}
        style={{ width: 32, height: 32 }}
      />
      <Text style={{ color: '#FFFEFE', fontSize: 12 }}>Write Review</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={images.rewardIcon} style={{ width: 32, height: 32 }} />
      <Text style={{ color: '#2F669C', fontSize: 12 }}>Rewards</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={images.profileIcon} style={{ width: 32, height: 32 }} />
      <Text style={{ color: '#2F669C', fontSize: 12 }}>Profile</Text>
    </TouchableOpacity>
  </View>
)

const MainTab = TabNavigator(
  {
    testing: {
      screen: Screen1,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => <MainTabNavigator />,
    tabBarOptions: {
      style: {},
    },
  },
)

export default MainTab
