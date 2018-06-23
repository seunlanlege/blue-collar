import React from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { observer } from 'mobx-react'

import { PlaceSearchUI } from '../../../components/placesmodal'
import { ReviewList } from '../../review-list'
import images from '../../../../assets/images'
import { ReviewsStore } from './store'
import { AppStore } from '../../store'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
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
  buttonReview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  innerButtonReivew: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1.2,
    justifyContent: 'flex-end',
    width: '75%',
  },
  button: {
    height: SEARCH_HEIGHT + 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F669C',
    borderRadius: 5,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontWeight: '400',
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
  recentReviewWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  recentReviewText: {
    fontSize: 20,
    color: '#9B9B9B',
  },
  loadingWrapper: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1.3,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginTop: '2%',
    marginBottom: '5%',
  },
})

@observer
export class Reviews extends React.Component {
  store = new ReviewsStore()

  writeReview = () => {
    const { dispatch } = this.props.screenProps.rootNavigation
    dispatch(
      NavigationActions.navigate({
        routeName: 'reviewForm',
      }),
    )
  }

  handleSelect = ({ review, place }) => {
    const toReview = NavigationActions.navigate({
      routeName: 'review',
      params: { review, place },
    })
    const { rootNavigation } = this.props.screenProps
    rootNavigation.dispatch(toReview)
  }

  keyExtractor = item => item.id.toString()

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
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
                onFocus={() => PlaceSearchUI.show()}
                placeholder="Search Property Address"
                style={styles.textInput}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonReview}>
          <View style={styles.innerButtonReivew}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={this.writeReview}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>Write a Review</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recentReviewWrapper}>
              <Text style={styles.recentReviewText}>
                Recent Reviews in Your Area:
              </Text>
            </View>
          </View>
          {this.store.reviews.case({
            pending: () => (
              <View style={styles.loadingWrapper}>
                <ActivityIndicator size="large" color="#2F669C" />
              </View>
            ),
            fulfilled: ({ reviews, places }) => (
              <View style={styles.flatList}>
                <FlatList
                  data={reviews}
                  renderItem={({ item, index }) => (
                    <ReviewList
                      data={item}
                      index={index}
                      places={places}
                      user={AppStore.auth.user}
                      navigation={this.props.screenProps.rootNavigation}
                      handleSelect={this.handleSelect}
                    />
                  )}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            ),
            rejected: () => (
              <View>
                <Text>Lol, Error</Text>
              </View>
            ),
          })}
        </View>
        <PlaceSearchUI
          onDone={place =>
            navigation.navigate({
              routeName: 'placeReviews',
              params: { place },
            })
          }
        />
      </View>
    )
  }
}
