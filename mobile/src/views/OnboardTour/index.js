import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

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
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
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

const OnboardTour = () => (
  <Swiper style={styles.wrapper} paginationStyle={{ bottom: 40 }}>
    <Slide1 />
    <Slide2 />
    <View style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
)

const Slide1 = () => (
  <View style={styles.slide}>
    <View
      style={{
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 0.45 }}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <View style={{ flex: 0.1 }}>
        <Text style={styles.mainText}>Welcome to Blue Collar Lists</Text>
      </View>
      <View>
        <Text style={styles.greyText}>Swipe to learn more</Text>
      </View>
    </View>
    <View style={styles.buttonWrapper}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
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
          <TouchableOpacity>
            <Text
              textDecorationLine="underline"
              textDecorationColor="#32679A"
              style={{ fontSize: 12 }}
            >
              Take the tour
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.5 }} />
    </View>
  </View>
)

const Slide2 = () => (
  <View style={styles.slide}>
    <View
      style={{
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 0.65 }}>
        <Image source={images.searchimg} style={{ width: 200, height: 200 }} />
      </View>
      <View style={{ flex: 0.15 }}>
        <Text style={{ color: '#54789B', fontSize: 24 }}>
          Save Time and Money
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 12, textAlign: 'center' }}>
          Search and get valuable information from
        </Text>
        <Text style={{ fontSize: 12, textAlign: 'center' }}>
          contractors like you before bidding your next job
        </Text>
      </View>
    </View>
    <View style={styles.buttonWrapper}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
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
      </View>
      <View style={{ flex: 0.5 }} />
    </View>
  </View>
)

export default OnboardTour
