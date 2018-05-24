// @flow
import React from 'react'
import Expo from 'expo'
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import images from '../../../assets/images'

import { actions as placeActions } from '../../redux/modules/places'
import PlaceResultList from '../../views/place-result-list'
import { PlacesModal } from './store'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  searchContainer: {
    height: 55,
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

let resolve, reject

const store = observable({
  isVisible: false,
})

const toggleVisibility = action(() => {
  store.isVisible = !store.isVisible
})

type IPlaceSearchUIProps = {
  onDone: (data: any) => void,
}

@observer
export class PlaceSearchUI extends React.Component<IPlaceSearchUIProps> {
  store = new PlacesModal()

  handleChange = (query: string) => {
    if (query === '') {
      this.store.resetPlaces()
    } else {
      this.store.search(query)
    }
  }

  @action
  onPress = (data: any) => {
    store.isVisible = false

    const { place_id: placeId, description } = data
    this.props.onDone({ placeId, description })
  }

  static show() {
    toggleVisibility()
  }

  close = () => {
    toggleVisibility()
    this.store.resetPlaces()
  }

  keyExtractor = (item: *) => item.id

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
    console.log('state', store.isVisible)
    return (
      <Modal
        onRequestClose={() => toggleVisibility()}
        visible={store.isVisible}
        animationType="slide"
      >
        <View style={{ flex: 1 }}>
          <View style={styles.searchContainer}>
            <TouchableOpacity
              onPress={() => this.close()}
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
          {this.store.places &&
            this.store.places.case({
              fulfilled: data => (
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                      <PlaceResultList
                        data={item}
                        index={index}
                        onPress={this.onPress}
                        // navigate={navigate}
                        // updateFieldFn={updateFieldFn}
                        toggleSearchFn={() => this.close()}
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
              ),
              pending: () => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ActivityIndicator size="large" color="#2F669C" />
                </View>
              ),
              rejected: err => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>An error has occured</Text>
                </View>
              ),
            })}
        </View>
      </Modal>
    )
  }
}
