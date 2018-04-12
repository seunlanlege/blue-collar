import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import images from '../../../assets/images'
import styles from '../shared/styles'

const localStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.3,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.25,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 0.3,
    width: '80%',
  },
  buttonContainer: {
    flex: 0.75,
    justifyContent: 'space-around',
  },
  mainButton: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F669C',
    borderColor: '#4369B0',
    borderRadius: 6,
  },
  minorButton: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2F669C',
    borderRadius: 6,
  },
  mainText: { color: '#FFFFFF' },
  minorText: {
    color: '#2F669C',
    fontSize: 20,
  },
})

const ComingSoon = ({ navigation }) => (
  <View style={styles.container}>
    <View style={localStyles.container}>
      <Text style={{ fontSize: 22, color: '#2F669C', textAlign: 'center' }}>
        Blue Collar List Coming Soon to Your Area
      </Text>
    </View>
    <View style={localStyles.imageContainer}>
      <Image source={images.comingSoon} />
    </View>
    <View style={localStyles.textContainer}>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#2F669C' }}>
        {"It looks like we haven't launched yet in your area. Enjoy your free "}
        {"trial and we'll notify you by email when we launch in your region!"}
      </Text>
    </View>
    <View style={localStyles.viewContainer}>
      <View style={localStyles.buttonContainer}>
        <TouchableOpacity style={localStyles.mainButton}>
          <Text style={localStyles.mainText}>
            Earn $ Become a BCL Ambassador
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.minorButton}
          onPress={() => navigation.navigate({ routeName: 'mainTab' })}
        >
          <Text style={localStyles.minorText}>Proceed to Free Trial</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default ComingSoon
