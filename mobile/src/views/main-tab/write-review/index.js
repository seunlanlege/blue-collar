import React from 'react'
import {
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import images from '../../../../assets/images'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flex: 0.6,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    height: SEARCH_HEIGHT,
    width: SEARCH_WIDTH,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
    shadowOffset: { width: 1, height: 4 },
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(151,151,151,0.1)',
  },
  textInputContainer: {
    flex: 1,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
    shadowOffset: { width: 1, height: 4 },
  },
  textInput: {
    height: SEARCH_HEIGHT,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'rgba(151,151,151,0.1)',
    paddingLeft: 12,
  },
})

class WriteReview extends React.Component {
  handleChange = () => {}

  keyExtractor = (item, index) => item.id

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity style={styles.searchIcon}>
              <Image source={images.searchTextInput} />
            </TouchableOpacity>
            <View style={styles.textInputContainer}>
              <TextInput placeholder="Search" style={styles.textInput} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text>Button and Recent Review Title</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={[{ key: 'Review 1' }, { key: 'Review 2' }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    )
  }
}

export default WriteReview
