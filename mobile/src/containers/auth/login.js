// @flow
import React, { Component } from 'react'
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { observer } from 'mobx-react'

import images from '../../../assets/images'
import { login as styles } from './styles'
import { AppStore } from '../store'

@observer
export class LoginUI extends Component<*> {
  onSubmit = () => {
    const { navigation } = this.props
    AppStore.auth
      .login()
      .then(userdetail => userdetail && navigation.navigate('userdetail'))
  }

  render() {
    const { navigation } = this.props
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        enableOnAndroid
        style={styles.keyboardWrapper}
      >
        <SafeAreaView style={styles.keyboardWrapper}>
          <View style={styles.container}>
            <View style={styles.takeTheTourWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate('onboard')}>
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
                onPress={() => AppStore.auth.loginWithFacebook()}
                style={styles.signUpFacebook}
              >
                <Image
                  source={images.facebookIcon}
                  style={{ height: 30, width: 30 }}
                />
                <View>
                  <Text style={styles.facebookAuth}>Log In with facebook</Text>
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
                  value={AppStore.auth.creds.email}
                  onChangeText={value => AppStore.auth.onChange('email', value)}
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
                  value={AppStore.auth.creds.password}
                  onChangeText={value =>
                    AppStore.auth.onChange('password', value)
                  }
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                  underlineColorAndroid="transparent"
                  autoCorrect={false}
                  style={styles.textInput}
                />
              </View>
            </View>
            <View style={{ flex: 0.8, marginTop: 10 }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    color: '#CCCCCC',
                    fontWeight: 'bold',
                  }}
                >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomFooter}>
              {AppStore.auth.loading === 'login' ? (
                <ActivityIndicator color="blue" size="large" />
              ) : (
                <TouchableOpacity
                  onPress={this.onSubmit}
                  style={styles.signUpButton}
                  disabled={!AppStore.auth.isValid}
                >
                  <Text style={styles.signUpButtonText}>Log In</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
  }
}
