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
    <TouchableOpacity
      style={{
        width: TAB_HEIGHT,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Image
          source={images.searchIcon}
          style={{
            width: 29,
            height: 29,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ color: '#2F669C', fontSize: 12 }}>Search</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: TAB_HEIGHT,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <Image
          source={images.inviteIcon}
          style={{
            width: 42,
            height: 42,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ color: '#2F669C', fontSize: 12 }}>Invite</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2F669C',
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Image
          source={images.writeReviewIcon}
          style={{ width: 28, height: 28 }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ color: '#FFFEFE', fontSize: 12 }}>Write Review</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: TAB_HEIGHT,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Image
          source={images.rewardIcon}
          style={{
            width: 34,
            height: 30,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ color: '#2F669C', fontSize: 12 }}>Rewards</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: TAB_HEIGHT,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Image
          source={images.profileIcon}
          style={{
            width: 32,
            height: 32,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ color: '#2F669C', fontSize: 12 }}>Profile</Text>
      </View>
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
