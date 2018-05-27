import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import images from '../../../assets/images'
import styles from '../../views/shared/styles'

const IMAGE_HEIGHT = Dimensions.get('window').width / 1.8

const localStyles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  creditCard: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promo: {
    fontSize: 16,
    color: '#2F669C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  keyboardAvoidingView: {
    flex: 0.5,
    width: '80%',
    justifyContent: 'space-around',
  },
  smallTextInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 2,
  },
  textInput: {
    fontSize: 11,
    height: 45,
    textAlign: 'center',
    marginBottom: 30,
    borderRadius: 2,
    borderLeftWidth: 1,
  },
  smallTextInput: {
    fontSize: 11,
    height: 45,
    textAlign: 'center',
    borderLeftWidth: 1,
    paddingLeft: 0,
  },
  footerWrapper: {
    flex: 0.3,
    width: '80%',
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  innerWrapper: {
    flex: 0.7,
    justifyContent: 'space-around',
  },
  promoCode: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#CCCCCC',
    color: '#CCCCCC',
    marginBottom: 20,
  },
  buttonWrapper: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F669C',
    borderColor: '#4369B0',
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
})

const promoText = subscriptionId => {
  if (subscriptionId) {
    return 'Update your payment information to resume your Blue Collar Lists access'
  }
  return 'TRY FREE for 30 days! Membership only $24.99/mo After trial'
}

export class Subscription extends Component<{
  visible: boolean,
  close: () => void,
}> {
  render() {
    const { subscriptionId, close, visible } = this.props
    return (
      <Modal onRequestClose={close} animationType="slide" visible={visible}>
        <KeyboardAwareScrollView>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={localStyles.container}>
                <View>
                  <Image
                    source={images.creditCard}
                    style={localStyles.creditCard}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ width: '95%' }}>
                  <Text style={localStyles.promo}>
                    {promoText(subscriptionId)}
                  </Text>
                  <Text style={localStyles.promo}>
                    {subscriptionId ? '' : 'Cancel anytime.'}
                  </Text>
                </View>
              </View>

              <View style={localStyles.keyboardAvoidingView}>
                <TextInput
                  name="cardNumber"
                  placeholder="Card Number"
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  style={[styles.textInput, localStyles.textInput]}
                />
                <TextInput
                  name="cardHolderName"
                  placeholder="Cardholder Name"
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  style={[styles.textInput, localStyles.textInput]}
                />

                <View style={localStyles.smallTextInputWrapper}>
                  <View style={{ width: '45%' }}>
                    <TextInput
                      name="expirationDate"
                      placeholder="Expiration Date"
                      underlineColorAndroid="transparent"
                      autoCorrect={false}
                      style={[styles.textInput, localStyles.textInput]}
                    />
                  </View>
                  <View style={{ width: '45%' }}>
                    <TextInput
                      name="cvc"
                      placeholder="CVC"
                      underlineColorAndroid="transparent"
                      autoCorrect={false}
                      style={[styles.textInput, localStyles.textInput]}
                    />
                  </View>
                </View>
              </View>

              <View style={localStyles.footerWrapper}>
                <View style={localStyles.innerWrapper}>
                  <TouchableOpacity stle={{ flex: 0 }}>
                    <Text style={localStyles.promoCode}>
                      Have a promo code?
                    </Text>
                  </TouchableOpacity>

                  {false ? (
                    <ActivityIndicator size="large" color="#4369B0" />
                  ) : (
                    <TouchableOpacity
                      //   onPress={handleSubmit(subscriptionFn)}
                      style={localStyles.buttonWrapper}
                    >
                      <Text style={localStyles.buttonText}>
                        {subscriptionId ? 'Submit' : 'Start Your Free Trial'}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </Modal>
    )
  }
}
