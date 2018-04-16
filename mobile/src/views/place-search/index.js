import React from 'react'
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { Constants, Location, Permissions } from 'expo'

import images from '../../../assets/images'

import { placeActions } from '../../redux/modules/places'

import PlaceResultList from '../place-result-list'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  searchContainer: {
    flex: 0.18,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F669C',
  },
  innerWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '75%',
    borderRadius: 4,
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
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  textInputContainer: {
    flex: 1,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
    shadowOffset: { width: 1, height: 4 },
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  textInput: {
    height: SEARCH_HEIGHT,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'rgba(151,151,151,0.1)',
    paddingLeft: 12,
  },
})

const mapStateToProps = state => state.places

const mapDispatchToProps = dispatch => ({
  searchPlaceFn: (lat, long, query) =>
    dispatch(placeActions.search(lat, long, query)),
  resetSearchFn: () => dispatch(placeActions.rejected()),
})

class PlaceSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      long: null,
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      )
    } else {
      this.getLocationAsync()
    }
  }

  componentWillUnmount() {
    this.props.resetSearchFn('clear')
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied')
    }

    const { coords } = await Location.getCurrentPositionAsync({})
    const { latitude, longitude } = coords
    this.setState({ lat: latitude, long: longitude })
  }

  handleChange = text => {
    const { lat, long } = this.state
    if (text === '') {
      this.props.resetSearchFn()
    } else {
      this.props.searchPlaceFn(lat, long, text)
    }
  }

  keyExtractor = (item, index) => item.id

  render() {
    const { results, toggleSearchFn, updateFieldFn, navigate } =
      this.props || {}

    return (
      <View style={{ flex: 1, top: 20 }}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => toggleSearchFn(false)}
            style={{ paddingRight: 15 }}
          >
            <Image
              source={images.leftArrow}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <View style={styles.innerWrapper}>
            <TouchableOpacity style={styles.searchIcon}>
              <Image source={images.searchTextInput} />
            </TouchableOpacity>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Search"
                style={styles.textInput}
                autoFocus
                onChangeText={text => this.handleChange(text)}
              />
            </View>
          </View>
        </View>
        {results && results.length > 0 ? (
          <View
            style={{
              flex: 1.3,
              flexDirection: 'row',
            }}
          >
            <FlatList
              data={results}
              renderItem={({ item, index }) => (
                <PlaceResultList
                  data={item}
                  index={index}
                  navigate={navigate}
                  updateFieldFn={updateFieldFn}
                  toggleSearchFn={toggleSearchFn}
                />
              )}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#CED0CE',
                    marginTop: '2%',
                    marginBottom: '5%',
                  }}
                />
              )}
            />
          </View>
        ) : null}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch)
