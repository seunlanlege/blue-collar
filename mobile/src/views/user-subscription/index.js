import React from 'react'
import {
  Image,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { subscriptionActions } from '../../redux/modules/user-subscription'

import images from '../../../assets/images'
import styles from '../shared/styles'

const IMAGE_HEIGHT = Dimensions.get('window').width / 1.8

const localStyles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
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

const mapStateToProps = state => state.userSubscription

const mapDispatchToProps = dispatch => ({
  reqSubscriptionFn: () => dispatch(subscriptionActions.request()),
  updateFieldFn: (field, value) =>
    dispatch(subscriptionActions.updateField(field, value)),
})

class UserSubscription extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.subscriptionId !== '') {
      const navigateMainTabAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
      })
      this.props.navigation.dispatch(navigateMainTabAction)
    }
  }

  promoText = () => {
    if (this.props.subscriptionId) {
      return 'Update your payment information to resume your Blue Collar Lists access'
    }
    return 'TRY FREE for 30 days! membership only $24.99/mo After trial'
  }

  render() {
    const {
      // reqSubscriptionFn,
      updateFieldFn,
      cardNumber,
      cardHolderName,
      expirationDate,
      cvv,
    } = this.props

    return (
      <View style={styles.container}>
        <View style={localStyles.container}>
          <View>
            <Image source={images.creditCard} style={localStyles.creditCard} />
          </View>
          <View style={{ width: '95%' }}>
            <Text style={localStyles.promo}>{this.promoText()}</Text>
            <Text style={localStyles.promo}>
              {this.props.subscriptionId ? '' : 'Cancel anytime.'}
            </Text>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior="padding"
          style={localStyles.keyboardAvoidingView}
        >
          <View>
            <TextInput
              placeholder="Card Number"
              style={[styles.textInput, localStyles.textInput]}
              onChangeText={text => updateFieldFn('cardNumber', text)}
              value={cardNumber}
            />
          </View>
          <TextInput
            placeholder="Cardholder Name"
            style={[styles.textInput, localStyles.textInput]}
            onChangeText={text => updateFieldFn('cardHolderName', text)}
            value={cardHolderName}
          />
          <View style={localStyles.smallTextInputWrapper}>
            <View style={{ width: '45%' }}>
              <TextInput
                placeholder="Expiration Date"
                style={[styles.textInput, localStyles.smallTextInput]}
                onChangeText={text => updateFieldFn('expirationDate', text)}
                value={expirationDate}
              />
            </View>
            <View style={{ width: '45%' }}>
              <TextInput
                placeholder="CVV"
                style={[styles.textInput, localStyles.smallTextInput]}
                secureTextEntry
                onChangeText={text => updateFieldFn('cvv', text)}
                value={cvv}
              />
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={localStyles.footerWrapper}>
          <View style={localStyles.innerWrapper}>
            <TouchableOpacity stle={{ flex: 0 }}>
              <Text style={localStyles.promoCode}>Have a promo code?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate({ routeName: 'comingSoon' })
              }
              style={localStyles.buttonWrapper}
              // disabled={
              //   cardNumber.length < 3 ||
              //   cardHolderName.length < 4 ||
              //   expirationDate < 3 ||
              //   expirationDate.email < 3
              // }
            >
              <Text style={localStyles.buttonText}>
                {this.props.subscriptionId ? 'Submit' : 'Start Your Free Trial'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSubscription)
