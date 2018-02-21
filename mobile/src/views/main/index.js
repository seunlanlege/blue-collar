import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { exampleActions } from '../../redux/modules/example'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = state => ({ example: state.example })
const mapDispatchToProps = dispatch => ({
  exampleFn: () => dispatch(exampleActions.increment()),
})

const Main = ({ example, exampleFn }) => (
  <View style={styles.container}>
    <Text>{example.counter}</Text>
    <TouchableOpacity onPress={exampleFn}>
      <Text>Increment</Text>
    </TouchableOpacity>
  </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
