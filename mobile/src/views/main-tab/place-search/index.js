import React from 'react'
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { Constants, Location, Permissions } from 'expo'
// import { NavigationActions } from 'react-navigation'

import images from '../../../../assets/images'

import { placeActions } from '../../../redux/modules/places'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  searchContainer: {
    flex: 0.18,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F669C',
  },
  innerWrapper: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: '#fff',
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

  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.innerWrapper}>
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={images.searchTextInput} />
          </TouchableOpacity>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Search"
              style={styles.textInput}
              onFocus={() => {}}
              onChangeText={text => this.handleChange(text)}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch)
