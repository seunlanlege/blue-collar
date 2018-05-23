import React, { Component } from 'react'
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { observer } from 'mobx-react'

import images from '../../../assets/images'
import { login as styles } from './styles'
import { auth } from './store'

@observer
export class SignupUI extends Component {
  onSubmit = () => {}

  render() {
    const { navigation } = this.props
    return (
      <Modal onRequestClose={() => navigation.goBack()} animationType="slide">
        <KeyboardAwareScrollView style={styles.keyboardWrapper}>
          <SafeAreaView style={styles.keyboardWrapper}>
            <View style={styles.container}>
              <View style={styles.takeTheTourWrapper}>
                <TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => auth.loginWithFacebook()}
                  style={styles.signUpFacebook}
                >
                  <Image
                    source={images.facebookIcon}
                    style={{ height: 30, width: 30 }}
                  />
                  <View>
                    <Text style={styles.facebookAuth}>
                      Sign up with Facebook
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <Image
                  source={images.email}
                  style={styles.textInputIcon}
                  resizeMode="contain"
                />
                <View style={styles.textInputInner}>
                  <TextInput
                    value={auth.creds.email}
                    onChangeText={value => auth.onChange('email', value)}
                    name="email"
                    placeholder="Email Address"
                    autoCapitalize="none"
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    style={styles.textInput}
                  />
                </View>
              </View>
              <View style={styles.textInputContainer}>
                <Image
                  source={images.password}
                  style={styles.textInputIcon}
                  resizeMode="contain"
                />
                <View style={styles.textInputInner}>
                  <TextInput
                    value={auth.creds.password}
                    onChangeText={value => auth.onChange('password', value)}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    style={styles.textInput}
                  />
                </View>
              </View>
              <View style={{ flex: 0.8, marginTop: 10, marginHorizontal: 20 }}>
                <Text style={styles.topWrapper}>
                  By signing up, you agree to our{' '}
                  <Text onPress={() => {}} style={styles.termPolicy}>
                    Term
                  </Text>{' '}
                  &{' '}
                  <Text onPress={() => {}} style={styles.termPolicy}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
              <View style={styles.bottomFooter}>
                {auth.loading === 'login' ? (
                  <ActivityIndicator color="blue" size="large" />
                ) : (
                  <TouchableOpacity
                    onPress={() => auth.signup()}
                    style={styles.signUpButton}
                  >
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </Modal>
    )
  }
}
