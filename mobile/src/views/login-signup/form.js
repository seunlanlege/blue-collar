import React from 'react'
import { Field } from 'redux-form'
import {
  ActivityIndicator,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { TextInputField } from '../shared/redux-form'
import images from '../../../assets/images'
import { FontAwesome } from '@expo/vector-icons'

const IMAGE_HEIGHT = Dimensions.get('window').width / 3

const styles = StyleSheet.create({
  iconWrapper: {
    width: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 13,
    paddingRight: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  keyboardWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  takeTheTourWrapper: {
    marginTop: 12,
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  takeTheTour: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#3d6587',
    fontWeight: 'bold',
  },
  imageWrapper: {
    marginTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
  },
  buttonWrapper: {
    marginTop: 36,
    width: '85%',
    justifyContent: 'space-around',
  },
  signUpFacebook: {
    flex: 0.5,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#495991',
    borderRadius: 6,
  },
  facebookAuth: {
    paddingLeft: 15,
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 18,
  },
  divider: {
    flexDirection: 'row',
    marginTop: 20,
  },
  line: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: '#F2F2F4',
  },
  lineText: {
    flex: 0.4,
    top: -7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  textInputContainer: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    marginTop: 8,
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
  bottomFooter: {
    flex: 1.2,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 80,
    justifyContent: 'flex-start',
  },
  signUpButton: {
    flex: 0.4,
    height: 45,
    marginTop: 10,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4369B0',
    borderRadius: 6,
  },
  signUpButtonText: {
    color: '#4369B0',
    fontWeight: '500',
    fontSize: 18,
  },
})

const LoginSignupForm = ({
  mainButtonTitle,
  minorButtonTitle,
  children,
  loading,
  facebookAuth,
  onSubmit,
  toggleFn,
  facebook,
}) => (
  <KeyboardAwareScrollView style={styles.keyboardWrapper}>
    <SafeAreaView style={styles.keyboardWrapper}>
      <View style={styles.container}>
        <View style={styles.takeTheTourWrapper}>
          <TouchableOpacity onPress={() => toggleFn()}>
            <Text style={styles.takeTheTour}>Take The Tour</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.buttonWrapper}>
          {facebook ? (
            <TouchableOpacity
              style={styles.signUpFacebook}
              onPress={() => facebookAuth()}
            >
              <Image
                source={images.facebookIcon}
                style={{ height: 30, width: 30 }}
              />
              <View>
                <Text style={styles.facebookAuth}>{mainButtonTitle}</Text>
              </View>
            </TouchableOpacity>
          ) : null}
          <View style={styles.divider}>
            {/* <View style={styles.line} />
            <View style={styles.lineText}>
              <Text style={{ fontSize: 12, color: '#D1D2D4' }}>OR</Text>
            </View>
            <View style={styles.line} /> */}
          </View>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <View style={styles.textInputContainer}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="envelope" size={20} color="#CCC" />
          </View>
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
          <View style={styles.iconWrapper}>
            <FontAwesome name="lock" size={25} color="#CCC" />
          </View>
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
        <View style={{ flex: 0.8, marginTop: 10, marginHorizontal: 20 }}>
          {children}
        </View>
        <View style={styles.bottomFooter}>
          {loading ? (
            <ActivityIndicator color="blue" size="large" />
          ) : (
            <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
              <Text style={styles.signUpButtonText}>{minorButtonTitle}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  </KeyboardAwareScrollView>
)

export default LoginSignupForm
