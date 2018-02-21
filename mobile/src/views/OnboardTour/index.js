import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 120,
    height: 120,
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
    fontSize: 12,
    fontWeight: 'bold',
  },
})

const OnboardTour = () => ({
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <View
            style={{
              flex: 1.4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{ flex: 0.5 }}>
              <Image source={images.logo} style={styles.logo} />
            </View>
            <View style={{ flex: 0.1 }}>
              <Text style={styles.mainText}>Welcome to Blue Collar Lists</Text>
            </View>
            <View>
              <Text style={styles.greyText}>Swipe to learn more</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#32679A',
                  borderRadius: 4,
                }}
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
                style={{
                  flex: 0.26,
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: '#32679A',
                  backgroundColor: '#FFFFFF',
                }}
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
            <View style={{ flex: 0.4 }} />
          </View>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  },
})

export default OnboardTour
