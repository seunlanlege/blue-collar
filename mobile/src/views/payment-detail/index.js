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
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { paymentActions } from '../../redux/modules/payment-detail'
import { logInActions } from '../../redux/modules/login'

import images from '../../../assets/images'
import styles from '../shared/styles'

const IMAGE_HEIGHT = Dimensions.get('window').width / 1.8

const mapStateToProps = state => state.paymentDetail

const mapDispatchToProps = dispatch => ({
  reqSubscriptionFn: () => dispatch(paymentActions.request()),
  updateFieldFn: (field, value) =>
    dispatch(logInActions.updateField(field, value)),
})

class PaymentDetail extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.subscriptionId) {
      const navigateMainTabAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
      })
      this.props.navigation.dispatch(navigateMainTabAction)
    }
  }
  render() {
    const {
      reqSubscriptionFn,
      updateFieldFn,
      cardNumber,
      cardHolderName,
      expirationDate,
      cvv,
    } = this.props

    return (
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
            <Text
              style={{ fontSize: 22, color: '#2F669C', textAlign: 'center' }}
            >
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
                  fontSize: 11,
                  height: 45,
                  textAlign: 'center',
                  borderRadius: 2,
                  borderLeftWidth: 1,
                },
              ]}
              onChangeText={text => updateFieldFn('cardNumber', text)}
              value={cardNumber}
            />
          </View>
          <TextInput
            placeholder="Cardholder Name"
            style={[
              styles.textInput,
              {
                fontSize: 11,
                height: 45,
                textAlign: 'center',
                borderRadius: 2,
                borderLeftWidth: 1,
              },
            ]}
            onChangeText={text => updateFieldFn('cardHolderName', text)}
            value={cardHolderName}
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
                    fontSize: 11,
                    height: 45,
                    textAlign: 'center',
                    borderLeftWidth: 1,
                    paddingLeft: 0,
                  },
                ]}
                onChangeText={text => updateFieldFn('expirationDate', text)}
                value={expirationDate}
              />
            </View>
            <View style={{ width: '45%' }}>
              <TextInput
                placeholder="CVV"
                style={[
                  styles.textInput,
                  {
                    fontSize: 11,
                    height: 45,
                    textAlign: 'center',
                    borderLeftWidth: 1,
                    paddingLeft: 0,
                  },
                ]}
                secureTextEntry
                onChangeText={text => updateFieldFn('cvv', text)}
                value={cvv}
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
              onPress={() => reqSubscriptionFn()}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetail)
