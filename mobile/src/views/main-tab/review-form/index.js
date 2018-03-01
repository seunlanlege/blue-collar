import React from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const ReviewForm = () => (
  <ScrollView
    style={{
      top: 20,
      backgroundColor: '#FFFFFF',
    }}
  >
    <View style={{ marginTop: 10, marginBottom: 33, marginLeft: 10 }}>
      <Text
        style={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          textDecorationColor: '#3d6587',
          color: '#9B9B9B',
        }}
      >
        Cancel
      </Text>
    </View>
    <TouchableOpacity style={{ marginBottom: 26 }}>
      <Text style={{ fontSize: 23, color: '#2F669C', textAlign: 'center' }}>
        Write a Review
      </Text>
    </TouchableOpacity>
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <TextInput
        placeholder="Street Address"
        style={{
          paddingLeft: 10,
          height: 35,
          borderWidth: 1,
          borderColor: '#DBDBDB',
        }}
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholder="Apt #"
          style={{
            paddingLeft: 10,
            height: 35,
            borderWidth: 1,
            borderColor: '#DBDBDB',
            width: 90,
          }}
        />
        <TextInput
          placeholder="State"
          style={{
            paddingLeft: 10,
            height: 35,
            borderWidth: 1,
            borderColor: '#DBDBDB',
            width: 80,
          }}
        />
        <TextInput
          placeholder="Zip"
          style={{
            paddingLeft: 10,
            height: 35,
            borderWidth: 1,
            borderColor: '#DBDBDB',
            width: 90,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="City"
          style={{
            paddingLeft: 10,
            height: 35,
            borderWidth: 1,
            borderColor: '#DBDBDB',
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Home Owner Name"
          style={{
            paddingLeft: 10,
            height: 35,
            borderWidth: 1,
            borderColor: '#DBDBDB',
          }}
        />
      </View>
    </View>
  </ScrollView>
)

export default ReviewForm
