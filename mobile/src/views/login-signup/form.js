import React from 'react'
import { Field } from 'redux-form'
import {
  ActivityIndicator,
  Animated,
  Easing,
  Image,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  takeTheTour: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#3d6587',
    fontWeight: 'bold',
  },
  signUpFacebook: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#495991',
    borderRadius: 6,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textInputInner: {
    flex: 1,
    flexDirection: 'column',
  },
  textInputIcon: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#CCCCCC',
  },
  textInput: {
    height: 45,
    paddingLeft: 12,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  signUpButton: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4369B0',
    borderRadius: 6,
  },
})

const window = Dimensions.get('window')

const IMAGE_HEIGHT = window.width / 2.5
const IMAGE_HEIGHT_SMALL = window.width / 4

const TextInputField = ({ input, ...propz }) => (
  <TextInput style={styles.input} onChangeText={input.onChange} {...propz} />
)

class LoginSignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT)
  }

  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    )
    this.keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    )
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove()
    this.keyboardWillHideListener.remove()
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
      easing: Easing.ease,
    }).start()
  }

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
      easing: Easing.ease,
    }).start()
  }
  // @TODO Change dispatch(navigateAction) to onPress later, this for trigger login action
  render() {
    const {
      mainButtonTitle,
      minorButtonTitle,
      children,
      navigation: { navigate },
      loading,
      facebookAuth,
      onSubmit,
    } = this.props
    return (
      <View
        style={{
          flex: 1,
          top: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <View
          style={{
            flex: 0.2,
            width: '95%',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigate('onBoard')}>
            <Text style={styles.takeTheTour}>Take The Tour</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Animated.Image
            source={images.logo}
            style={{ width: this.imageHeight, height: this.imageHeight }}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: '80%',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity
            style={styles.signUpFacebook}
            onPress={() => facebookAuth()}
          >
            <Image source={images.facebookIcon} />
            <View>
              <Text
                style={{
                  paddingLeft: 15,
                  color: '#FFFFFF',
                  fontWeight: '500',
                }}
              >
                {mainButtonTitle}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{ flex: 1, borderTopWidth: 1, borderColor: '#F2F2F4' }}
            />
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
                justifyContent: 'center',
                top: -7,
              }}
            >
              <Text style={{ fontSize: 12, color: '#D1D2D4' }}>OR</Text>
            </View>
            <View
              style={{ flex: 1, borderTopWidth: 1, borderColor: '#F2F2F4' }}
            />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            flex: 1.5,
            width: '80%',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.textInputContainer}>
            <Image source={images.email} style={styles.textInputIcon} />
            <View style={styles.textInputInner}>
              <Field
                name="email"
                component={TextInputField}
                placeholder="Email Address"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Image source={images.password} style={styles.textInputIcon} />
            <View style={styles.textInputInner}>
              <Field
                name="password"
                component={TextInputField}
                placeholder="Password"
                secureTextEntry
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={{ flex: 0.8 }}>{children}</View>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 1.2,
            width: '80%',
            justifyContent: 'flex-start',
          }}
        >
          {loading ? (
            <ActivityIndicator color="blue" size="large" />
          ) : (
            <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
              <Text style={{ color: '#4369B0', fontWeight: '500' }}>
                {minorButtonTitle}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

export default LoginSignupForm
