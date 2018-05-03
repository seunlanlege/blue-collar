import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import PlaceSearch from '../../../place-search'

import images from '../../../../../assets/images'
import SelectButton from '../../../shared/search-select'
import ReviewSearchResult from './review-search-result'
import PropertyItems from './property-items'

import { actions as reviewActions } from '../../../../redux/modules/reviews'
import { actions as userActions } from '../../../../redux/modules/users'
import { actions as modalActions } from '../../../../redux/modules/modals'

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

const mapStateToProps = state => ({
  reviews: state.reviews,
  users: state.users,
  modals: state.modals,
  places: state.places,
})

const mapDispatchToProps = dispatch => ({
  selectReviewFn: data => dispatch(reviewActions.select(data)),
  placeBid: () => dispatch(userActions.bid()),
  toggleFn: status => dispatch(modalActions.toggle('search', status)),
})

const properties = [
  { id: 1, icon_url: images.carpenter, item_name: 'Carpenter', amount: 2 },
  {
    id: 2,
    icon_url: images.carpenter,
    item_name: 'Cleanouts/Demolition',
    amount: 1,
  },
  { id: 3, icon_url: images.carpenter, item_name: 'Electrician', amount: 2 },
  {
    id: 4,
    icon_url: images.carpenter,
    item_name: 'General Contractor',
    amount: 2,
  },
  { id: 5, icon_url: images.carpenter, item_name: 'Gutter', amount: 2 },
  { id: 6, icon_url: images.carpenter, item_name: 'Fence', amount: 1 },
  { id: 7, icon_url: images.carpenter, item_name: 'Framer', amount: 1 },
  { id: 8, icon_url: images.carpenter, item_name: 'Floring/Tile', amount: 1 },
  { id: 9, icon_url: images.carpenter, item_name: 'HVAC', amount: 1 },
  { id: 10, icon_url: images.carpenter, item_name: 'Landscaping', amount: 1 },
  { id: 11, icon_url: images.carpenter, item_name: 'Mason', amount: 2 },
  { id: 12, icon_url: images.carpenter, item_name: 'Movers', amount: 1 },
  {
    id: 13,
    icon_url: images.carpenter,
    item_name: 'Plasterer/Drywall',
    amount: 1,
  },
  { id: 14, icon_url: images.carpenter, item_name: 'Plumber', amount: 1 },
  { id: 15, icon_url: images.carpenter, item_name: 'Painter', amount: 1 },
  { id: 16, icon_url: images.carpenter, item_name: 'Roofer', amount: 1 },
]

const colors = [
  '#FFFEF3',
  '#E6F0FB',
  '#FCEDEF',
  '#EFFAE4',
  '#F7FEFF',
  '#FEF4E4',
  '#F2F5ED',
  '#F3F3F3',
]

class PlaceReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowProperty: false,
    }
  }

  writeReview = () => {
    const navigateReviewFormAction = NavigationActions.navigate({
      routeName: 'reviewForm',
      params: {},
    })
    const { dispatch } = this.props.navigation
    dispatch(navigateReviewFormAction)
  }

  handleSelect = data => {
    this.props.selectReviewFn(data)
    const toReview = NavigationActions.navigate({
      routeName: 'review',
    })

    const { rootNavigation } = this.props.screenProps
    rootNavigation.dispatch(toReview)
  }

  handlePress = () => {
    this.setState({ isShowProperty: !this.state.isShowProperty })
  }

  keyExtractor = (item, index) => item.id.toString()

  render() {
    const {
      places: placeReviews,
      users,
      modals,
      toggleFn,
      navigation,
    } = this.props
    const {
      reviews,
      id,
      googleId,
      formattedAddress,
      createdAt,
      name,
    } = placeReviews

    const { activeBids } = users
    const places = {
      [id]: {
        id,
        googleId,
        formattedAddress,
        createdAt,
        name,
      },
    }

    if (modals.search) {
      return (
        <PlaceSearch
          toggleSearchFn={toggleFn}
          navigate={() => navigation.navigate({ routeName: 'placeReviews' })}
        />
      )
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.innerWrapper}>
              <TouchableOpacity style={styles.searchIcon} onPress={() => {}}>
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
                  onFocus={() => toggleFn('search', true)}
                />
              </View>
            </View>
          </View>
          {this.state.isShowProperty ? null : (
            <View style={styles.innerButtonReivew}>
              <View style={styles.buttonWrapper}>
                <Text style={styles.textUpperButton}>
                  Were you recently contacted to bid a job at this location?
                </Text>

                <View>
                  {/* Yes button */}
                  <SelectButton
                    disabled={activeBids.length > 0}
                    onPress={this.props.placeBid}
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
                {`${reviews.length || 0} active bids at this property`}
              </Text>
            </View>
          </TouchableOpacity>
          {this.state.isShowProperty ? (
            <PropertyItems properties={properties} colors={colors} />
          ) : (
            <ReviewSearchResult
              navigation={this.props.navigation}
              places={places}
              reviews={reviews}
              writeReview={this.writeReview}
              handleSelect={this.handleSelect}
            />
          )}
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceReviews)
