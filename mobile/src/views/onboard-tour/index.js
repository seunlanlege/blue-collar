import React from 'react'
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { NavigationActions } from 'react-navigation'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 140,
    height: 140,
  },
  headLineWrapper: {
    flex: 0.15,
  },
  headLine: {
    color: '#54789B',
    fontSize: 24,
  },
  buttonWrapper: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  mainText: {
    color: '#555555',
    fontSize: 16,
    fontWeight: 'bold',
  },
  greyText: {
    color: '#ACACAC',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

const Slide1 = ({ navigation }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.logo}
      headLine="Welcome to Blue Collar Lists"
      tagLine="Swipe to learn more"
      imageStyle={{ flex: 0.45 }}
      logoStyle={styles.logo}
      headLineWrapperStyle={{ flex: 0.1 }}
      headLineStyle={styles.mainText}
      tagLineWrapper={{}}
      tagLineStyle={styles.greyText}
    />
    <LoginButton navigate={navigation.dispatch}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ marginRight: 8 }}>
          <Text style={[styles.greyText, { fontSize: 10 }]}>
            Want to see how it works?
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.refSwiper.scrollBy(1)}>
          <Text
            textDecorationLine="underline"
            textDecorationColor="#32679A"
            style={{
              fontSize: 12,
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#3d6587',
              color: '#3d6587',
            }}
          >
            Take the tour
          </Text>
        </TouchableOpacity>
      </View>
    </LoginButton>
  </View>
)

const Slide2 = ({ navigation }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.searchImg}
      headLine="Save Time and Money"
      tagLine="Search and get valuable information from"
      secondTagline="contractors like you before bidding your next job"
      imageStyle={{ flex: 0.65 }}
      logoStyle={{ width: 200, height: 200 }}
      headLineWrapperStyle={styles.headLineWrapper}
      headLineStyle={styles.headLine}
      tagLineWrapper={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tagLineStyle={{ fontSize: 12, textAlign: 'center' }}
    />
    <LoginButton navigate={navigation.dispatch} />
  </View>
)

const Slide3 = ({ navigation }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.bid}
      headLine="Bid Confidently"
      tagLine="See bid activity by Trade on properties you"
      secondTagline="search"
      imageStyle={{ flex: 0.65 }}
      logoStyle={{ width: 160, height: 210 }}
      headLineWrapperStyle={styles.headLineWrapper}
      headLineStyle={styles.headLine}
      tagLineWrapper={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tagLineStyle={{ fontSize: 12, textAlign: 'center' }}
    />

    <LoginButton navigate={navigation.dispatch} />
  </View>
)

const Slide4 = ({ navigation }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.reward}
      headLine="Earn Rewards"
      tagLine="Enter Reviews - Earn Points - Get Rewards"
      secondTagline
      imageStyle={{
        flex: 0.65,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      logoStyle={{ width: 150, height: 210 }}
      headLineWrapperStyle={styles.headLineWrapper}
      headLineStyle={styles.headLine}
      tagLineWrapper={{}}
      tagLineStyle={{ fontSize: 13, textAlign: 'center' }}
    />
    <LoginButton navigate={navigation.dispatch} />
  </View>
)

const ImagePlaceholder = ({
  image,
  headLine,
  tagLine,
  secondTagline,
  imageStyle,
  logoStyle,
  headLineWrapperStyle,
  headLineStyle,
  tagLineWrapper,
  tagLineStyle,
}) => (
  <View
    style={{
      flex: 1.4,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={imageStyle}>
      <Image source={image} style={logoStyle} />
    </View>
    <View style={headLineWrapperStyle}>
      <Text style={headLineStyle}>{headLine}</Text>
    </View>
    <View style={tagLineWrapper}>
      <Text style={tagLineStyle}>{tagLine}</Text>
      {secondTagline ? <Text style={tagLineStyle}>{secondTagline}</Text> : null}
    </View>
  </View>
)

const navigateSignUpAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'signUp' })],
})

const navigateLogInAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'logIn' })],
})

const LoginButton = ({ navigate, children }) => (
  <View style={styles.buttonWrapper}>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        onPress={() => navigate(navigateSignUpAction)}
        style={[
          styles.button,
          {
            flex: 0.4,
            backgroundColor: '#32679A',
          },
        ]}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate(navigateLogInAction)}
        style={[
          styles.button,
          {
            flex: 0.36,
            borderWidth: 1,
            borderColor: '#32679A',
            backgroundColor: '#FFFFFF',
          },
        ]}
      >
        <Text
          style={{
            color: '#32679A',
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>
      {children}
    </View>
    <View style={{ flex: 0.5 }} />
  </View>
)

const OnboardTour = ({ navigation }) => (
  <Modal>
    <Swiper
      style={styles.wrapper}
      paginationStyle={{ bottom: 40 }}
      ref={swiper => {
        this.refSwiper = swiper
      }}
    >
      <Slide1 navigation={navigation} />
      <Slide2 navigation={navigation} />
      <Slide3 navigation={navigation} />
      <Slide4 navigation={navigation} />
    </Swiper>
  </Modal>
)

export default OnboardTour
