import React from 'react'
import Expo from 'expo'
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import images from '../../../assets/images'

import { actions as placeActions } from '../../redux/modules/places'

import { SearchResult } from '../place-result-list'

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
  resetSearchFn: () => dispatch(placeActions.searchRejected()),
})

class PlaceSearch extends React.Component {
  componentWillUnmount() {
    this.props.resetSearchFn('clear')
  }

  handleChange = query => {
    const { lat, long } = this.props
    if (query === '') {
      this.props.resetSearchFn()
    } else {
      this.props.searchPlaceFn(lat, long, query)
    }
  }

  keyExtractor = (item, index) => item.id

  componentDidMount() {
    this.checkPermissions()
  }

  async checkPermissions() {
    const { Permissions } = Expo
    const { status } = await Permissions.getAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied')
    }
  }

  render() {
    const {
      results,
      toggleSearchFn,
      updateFieldFn,
      navigate,
      status,
      loading,
      subscription,
    } =
      this.props || {}

    return (
      <View style={{ flex: 1, top: subscription ? 20 : 0 }}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => toggleSearchFn(false)}
            style={{ paddingRight: 15 }}
          >
            <Image
              source={images.leftArrow}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.innerWrapper}>
            <TouchableOpacity style={styles.searchIcon}>
              <Image
                source={images.searchTextInput}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Search"
                style={styles.textInput}
                autoFocus
                autoCorrect={false}
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
                <SearchResult
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
        ) : (
          <View
            style={{
              flex: 1.3,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#2F669C" />
            ) : null}
          </View>
        )}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch)
