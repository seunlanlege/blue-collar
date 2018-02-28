import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import images from '../../../assets/images'

const PaymentDetail = () => (
  <View>
    <View>
      <Image source={images.creditCard} />
    </View>
    <View>
      <TextInput placeholder="Card Number" />
      <TextInput placeholder="Card Number" />
      <View>
        <TextInput placeholder="Card Number" />
        <TextInput placeholder="Card Number" />
      </View>
    </View>
    <View>
      <TouchableOpacity>
        <Text>Have a promo code?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Start Your Free Trial</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default PaymentDetail
