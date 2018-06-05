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
    fontFamily: 'roboto',
    color: '#2F669C',
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
    fontWeight: '700',
    color: '#4A4A4A',
    fontSize: 21,
  },
  greyText: {
    color: '#6A696B',
    fontSize: 19,
    fontWeight: '300',
  },
  tagLineStyle: {
    fontFamily: 'roboto',
    fontWeight: '300',
    fontSize: 15,
    textAlign: 'center',
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
          <Text
            style={[styles.greyText, { fontSize: 14, fontFamily: 'roboto' }]}
          >
            Want to see how it works?
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.refSwiper.scrollBy(1)}>
          <Text
            textDecorationLine="underline"
            textDecorationColor="#32679A"
            style={{
              fontFamily: 'roboto',
              fontSize: 14,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#2F669C',
              color: '#2F669C',
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
      tagLine="Read reviews of your clients, written by other contractors, before bidding your next job"
      secondTagline=""
      imageStyle={{ flex: 0.7 }}
      logoStyle={{ width: 200, height: 250 }}
      headLineWrapperStyle={styles.headLineWrapper}
      headLineStyle={styles.headLine}
      tagLineWrapper={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tagLineStyle={styles.tagLineStyle}
    />
    <LoginButton onPress={handlePress} />
  </View>
)

const Slide3 = ({ handlePress }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.bid}
      headLine="Bid Confidently"
      tagLine="See bid activity anonymously sorted by trade on properties you search"
      secondTagline="search"
      imageStyle={{ flex: 0.65 }}
      logoStyle={{ width: 160, height: 210 }}
      headLineWrapperStyle={styles.headLineWrapper}
      headLineStyle={styles.headLine}
      tagLineWrapper={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      tagLineStyle={styles.tagLineStyle}
    />

    <LoginButton onPress={handlePress} />
  </View>
)

const Slide4 = ({ handlePress }) => (
  <View style={styles.slide}>
    <ImagePlaceholder
      image={images.reward}
      headLine="Earn Rewards"
      tagLine="Enter Reviews - Earn Points - Win Tools, Toys, Trips and More"
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
      tagLineStyle={styles.tagLineStyle}
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
        activeDot={
          <View
            style={{
              backgroundColor: '#2F669C',
              width: 9,
              height: 9,
              borderRadius: 5,
              marginLeft: 3,
              marginRight: 3,
            }}
          />
        }
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
