import React, { Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { InviteStore } from './store'
import images from '../../../assets/images'
import { AppStore } from '../../containers/store'

export class Invite extends Component {
  store = new InviteStore()
  render() {
    const { referralCode, firstName } = AppStore.auth.user
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 4,
            backgroundColor: '#32679A',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#32679A',
            }}
          >
            <Text
              style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}
            >
              Invite Others, Earn 100 points
            </Text>
            <Image
              source={images.invite}
              resizeMode="contain"
              style={{ height: 50, width: 100 }}
            />
            <Text
              style={{
                color: '#FFFFFF',
                marginLeft: 10,
                marginRight: 10,
                textAlign: 'center',
                lineHeight: 20,
              }}
            >
              Invite Others and Earn 100 points when they sign up for Blue
              Collar Lists!{'\n'}
              <Text style={{ color: '#FFFFFF' }}>
                {`bluecollarlists.com/app/${referralCode}`}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            flex: 2.5,
            width: '80%',
            justifyContent: 'space-around',
          }}
        >
          <Text style={{ color: '#32679A' }}>Share Your Invite Code</Text>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              paddingLeft: 10,
            }}
            value={referralCode || ''}
          />
          <TouchableOpacity
            onPress={() => this.store.share(firstName)}
            style={{
              height: 40,
              backgroundColor: '#32679A',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              INVITE OTHERS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }} />
      </View>
    )
  }
}
