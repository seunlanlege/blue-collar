import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    flex: 0.15,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 30,
    textAlign: 'left',
    fontSize: 30,
  },
  buttonWrapper: {
    flex: 0.2,
    width: '90%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#32679A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 55,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
})

const Profile = () => (
  <View style={styles.container}>
    <View style={[styles.contentWrapper, { top: 10 }]}>
      <TouchableOpacity>
        <Text style={styles.title}>profile</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentWrapper}>
      <TouchableOpacity>
        <Text style={styles.title}>subscription detail</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentWrapper}>
      <TouchableOpacity>
        <Text style={styles.title}>add team members</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentWrapper}>
      <TouchableOpacity>
        <Text style={styles.title}>home location</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentWrapper}>
      <TouchableOpacity>
        <Text style={styles.title}>promo code</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.contentWrapper}>
      <TouchableOpacity>
        <Text style={styles.title}>log out</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Blue Collar List</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default Profile
