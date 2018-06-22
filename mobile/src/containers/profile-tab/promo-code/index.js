import React from 'react'
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native'

import images from '../../../../assets/images'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: 5,
    paddingLeft: 5,
  },
  backButtonImage: {
    paddingRight: 5,
  },
  backButtonColor: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#4B7295',
  },
  promoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  promoText: {
    textAlign: 'center',
    color: '#4B7295',
    fontWeight: '700',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    width: '80%',
  },
  placeholder: {
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 5,
    backgroundColor: '#32679A',
  },
  redeemText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
})

export const PromoCode = ({ navigation, loading }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <View style={styles.backButtonImage}>
        <Image
          source={images.back}
          style={{ height: 10, width: 10 }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.backButtonColor}>Back</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.promoContainer}>
      <Text style={styles.promoText}>Do you have a promo code?</Text>
      <Text style={styles.promoText}>Reedem it below.</Text>
    </View>
    <View style={styles.buttonContainer}>
      <View
        style={{
          marginBottom: 40,
        }}
      >
        <TextInput
          name="promoCode"
          placeholder="Enter promo code"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          style={styles.placeholder}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#4B7295" />
      ) : (
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.redeemText}>Redeem</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
)
