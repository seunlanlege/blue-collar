import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { observer } from 'mobx-react'

import { PlaceSearchUI } from '../../../components/placesmodal'

import images from '../../../../assets/images'
import SelectButton from '../../../views/shared/search-select'
import { ReviewSearchResult } from './review-search-result'
import { PropertyItems } from './property-items'

import { actions as reviewActions } from '../../../redux/modules/reviews'
import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'
import { actions as placeActions } from '../../../redux/modules/places'

import { PROPERTIES, COLORS } from './constants'
import { AppStore } from '../../store'
import { PlaceReviewStore } from './store'

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
    flex: 1,
    paddingTop: '10%',
    paddingBottom: '5%',
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
  textUpperButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F669C',
    textAlign: 'center',
  },
  innerButtonReivew: {
    flex: 1,
    marginTop: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
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
    fontSize: 16,
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
    // shadowColor: 'rgba(0,0,0,0.2)',
    // shadowOpacity: 0.2,
    // shadowRadius: 0.1,
    // shadowOffset: { width: 1, height: 4 },
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  textInput: {
    height: SEARCH_HEIGHT,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'rgba(151,151,151,0.1)',
    paddingLeft: 12,
    fontSize: 20,
    color: '#BCBCBC',
  },
  recentReviewWrapper: {
    marginTop: 15,
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
    flex: 1,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginTop: '2%',
    marginBottom: '5%',
  },
  bidCounter: {
    flexDirection: 'row',
    backgroundColor: '#2F669C',
    width: '75%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bidText: {
    paddingLeft: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonNoResult: {
    marginTop: 10,
    width: '100%',
  },
  marginTop20: {
    marginTop: 20,
  },
  itemCenter: {
    alignItems: 'center',
  },
  noresultWrapper: {
    marginTop: 10,
    justifyContent: 'center',
  },
  textNoResult: {
    fontSize: 20,
    color: '#E30613',
    textAlign: 'center',
  },
})

const mapDispatchToProps = dispatch => ({
  selectReviewFn: data => dispatch(reviewActions.select(data)),
  placeBid: () => dispatch(userActions.bid()),
  toggleFn: status => dispatch(modalActions.toggle('search', status)),
  clearReviews: () => dispatch(placeActions.clearReviews()),
})

@observer
export class PlaceReviews extends React.Component {
  store = new PlaceReviewStore()
  state = {
    isShowProperty: false,
  }

  writeReview = () => {
    const navigateReviewFormAction = NavigationActions.navigate({
      routeName: 'reviewForm',
    })
    const { rootNavigation } = this.props.screenProps
    rootNavigation.dispatch(navigateReviewFormAction)
  }

  handleSelect = data => {
    const toReview = NavigationActions.navigate({
      routeName: 'review',
      params: data,
    })

    const { rootNavigation } = this.props.screenProps
    rootNavigation.dispatch(toReview)
  }

  handlePress = () => {
    this.setState({ isShowProperty: !this.state.isShowProperty })
  }

  keyExtractor = item => item.id.toString()

  componentDidMount() {
    this.store.fetchPlace({
      // i guarantee this is safe
      id: this.props.navigation.state.params.place.placeId,
    })
  }

  render() {
    return this.store.place
      ? this.store.place.case({
          rejected: () => (
            <Text>
              It appears there are no results for the selected location
            </Text>
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
          fulfilled: place => {
            const {
              reviews,
              id,
              googleId,
              createdAt,
              name,
              activeBidsCount,
              groupBids,
              formattedAddress,
            } = place

            const places = {
              [id]: {
                id,
                googleId,
                formatted_address: formattedAddress,
                createdAt,
                name,
              },
            }

            return (
              <ScrollView>
                <View style={styles.container}>
                  <View style={styles.searchContainer}>
                    <View style={styles.innerWrapper}>
                      <TouchableOpacity
                        style={styles.searchIcon}
                        onPress={() => {}}
                      >
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
                          onFocus={() => PlaceSearchUI.show()}
                          value={formattedAddress}
                        />
                      </View>
                    </View>
                  </View>
                  {this.state.isShowProperty ? null : (
                    <View style={styles.innerButtonReivew}>
                      <View style={styles.buttonWrapper}>
                        <Text style={styles.textUpperButton}>
                          Were you recently contacted to bid a job at this
                          location?
                        </Text>

                        <View>
                          {/* Yes button */}
                          <SelectButton
                            disabled={AppStore.auth.user.activeBids.length > 0}
                            onPress={() => AppStore.placeBid(place)}
                          />
                        </View>
                      </View>
                    </View>
                  )}
                  <TouchableOpacity
                    disabled={reviews.length === 0}
                    style={[
                      styles.bidCounter,
                      this.state.isShowProperty ? styles.marginTop20 : null,
                    ]}
                    onPress={this.handlePress}
                  >
                    <View>
                      <Image
                        source={images.hand}
                        style={{ width: 30, height: 30 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.bidText}>
                        {`${activeBidsCount || 0} active bids at this property`}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {this.state.isShowProperty ? (
                    <PropertyItems
                      properties={PROPERTIES}
                      colors={COLORS}
                      groupBids={groupBids}
                    />
                  ) : (
                    <ReviewSearchResult
                      navigation={this.props.navigation}
                      places={places}
                      reviews={reviews}
                      writeReview={this.writeReview}
                      handleSelect={this.handleSelect}
                      clearReviews={this.props.clearReviews}
                    />
                  )}
                </View>
                <PlaceSearchUI
                  onDone={place =>
                    this.props.navigation.navigate({
                      routeName: 'placeReviews',
                      params: { place },
                    })
                  }
                />
              </ScrollView>
            )
          },
        })
      : null
  }
}
