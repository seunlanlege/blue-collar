import React from 'react'
import {
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import images from '../../../assets/images'
import styles from '../shared/styles'

const IMAGE_HEIGHT = Dimensions.get('window').width / 1.8

const PaymentDetail = () => (
  <View style={styles.container}>
    <View
      style={{
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View>
        <Image
          source={images.creditCard}
          style={{
            width: IMAGE_HEIGHT,
            height: IMAGE_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 22, color: '#2F669C', textAlign: 'center' }}>
          After your trial period only $24.99 a month
        </Text>
      </View>
    </View>

    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 0.5,
        width: '80%',
        justifyContent: 'space-around',
      }}
    >
      <View>
        <TextInput
          placeholder="Card Number"
          style={[
            styles.textInput,
            {
              height: 45,
              textAlign: 'center',
              borderRadius: 2,
              borderLeftWidth: 1,
            },
          ]}
        />
      </View>
      <TextInput
        placeholder="Cardholder Name"
        style={[
          styles.textInput,
          {
            height: 45,
            textAlign: 'center',
            borderRadius: 2,
            borderLeftWidth: 1,
          },
        ]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 2,
        }}
      >
        <View style={{ width: '45%' }}>
          <TextInput
            placeholder="Expiration Date"
            style={[
              styles.textInput,
              {
                height: 45,
                textAlign: 'center',
                borderLeftWidth: 1,
                paddingLeft: 0,
              },
            ]}
          />
        </View>
        <View style={{ width: '45%' }}>
          <TextInput
            placeholder="CVV"
            style={[
              styles.textInput,
              {
                height: 45,
                textAlign: 'center',
                borderLeftWidth: 1,
                paddingLeft: 0,
              },
            ]}
          />
        </View>
      </View>
    </KeyboardAvoidingView>

    <View
      style={{
        flex: 0.3,
        width: '80%',
        justifyContent: 'flex-start',
      }}
    >
      <View
        style={{
          flex: 0.7,
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity stle={{ flex: 0 }}>
          <Text
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#CCCCCC',
              color: '#CCCCCC',
            }}
          >
            Have a promo code?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2F669C',
            borderColor: '#4369B0',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
            Start Your Free Trial
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default PaymentDetail
