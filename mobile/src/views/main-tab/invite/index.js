import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { shareActions } from '../../../redux/modules/share'
import images from '../../../../assets/images'

const mapStateToProps = state => ({
  invite: state.invite,
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  shareFn: firstName => dispatch(shareActions.request(firstName)),
})

const Invite = ({ shareFn, users }) => (
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
        <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}>
          Invite Others, Earn Points
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
          Invite others and you’ll receive 100 points when they sign up with
          your promo code
          <Text style={{ color: '#FFFFFF' }}>
            {`\n\n${users.referralCode}`}
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
        value={users.referralCode || ''}
      />
      <TouchableOpacity
        onPress={() => shareFn(users.firstName)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Invite)
