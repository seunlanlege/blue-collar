import React from 'react'
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'

import { actions as modalActions } from '../../redux/modules/modals'

import LogIn from '../login-signup/login'
import SignUp from '../login-signup/signup'
import LoginButton from './login-signup-button'

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
    fontSize: 22,
    fontWeight: 'bold',
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

const Slide1 = ({ handlePress }) => (
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
    <LoginButton onPress={handlePress}>
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

const Slide2 = ({ handlePress }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.searchImg}
      headLine="Search Property Address"
      tagLine=""
      secondTagline="Read reviews of your clients, written by other contractors before bidding your next job"
      imageStyle={{ flex: 0.7 }}
      logoStyle={{ width: 200, height: 250 }}
      headLineWrapperStyle={styles.headLineWrapper}
      headLineStyle={styles.headLine}
      tagLineWrapper={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tagLineStyle={{ fontSize: 12, textAlign: 'center' }}
    />
    <LoginButton onPress={handlePress} />
  </View>
)

const Slide3 = ({ handlePress }) => (
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

    <LoginButton onPress={handlePress} />
  </View>
)

const Slide4 = ({ handlePress }) => (
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
    <LoginButton onPress={handlePress} />
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
      <Image source={image} style={logoStyle} resizeMode="contain" />
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

const OnboardTour = ({ signUp, logIn, toggle }) => {
  if (signUp) {
    return <SignUp />
  }
  if (logIn) {
    return <LogIn />
  }
  return (
    <Modal animationType="slide">
      <Swiper
        style={styles.wrapper}
        paginationStyle={{ bottom: 40 }}
        ref={swiper => {
          this.refSwiper = swiper
        }}
      >
        <Slide1 handlePress={toggle} />
        <Slide2 handlePress={toggle} />
        <Slide3 handlePress={toggle} />
        <Slide4 handlePress={toggle} />
      </Swiper>
    </Modal>
  )
}

const mapStateToProps = state => state.modals

const mapDispatchToProps = dispatch => ({
  toggle: (modalName, status) =>
    dispatch(modalActions.toggle(modalName, status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OnboardTour)
