import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  buttonWrapper: {
    marginTop: 0,
    marginBottom: 15,
    flexDirection: 'row',
  },
  button: {
    height: 48,
    borderWidth: 1,
    width: '36%',
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: '#D0021B',
    fontSize: 20,
  },
})

const SearchSelect = ({ onPress, title, disabled }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.button,
          {
            borderRadius: 15,
          },
        ]}
      >
        <View style={styles.activeTextStyle}>
          <Text style={[styles.innerText, { color: '#3AC847' }]}>Yes</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
            onPress={() => this.handleSelect()}
            style={[
              styles.button,
              {
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              },
            ]}
          >
            <View style={styles.activeTextStyle}>
              <Text style={styles.innerText}>No</Text>
            </View>
          </TouchableOpacity> */}
    </View>
  </View>
)

export default SearchSelect
