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
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import OnboardTour from '../../../onboard-tour'
import PlaceSearch from '../../../place-search'
import ReviewList from '../../review-list'

import images from '../../../../../assets/images'

import { reviewActions } from '../../../../redux/modules/reviews'
import { actions as modalActions } from '../../../../redux/modules/modals'

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
    fontSize: 11,
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

const mapStateToProps = state => ({
  placeReviews: state.reviews,
  users: state.users,
  modals: state.modals,
})

const mapDispatchToProps = dispatch => ({
  fetchReviewFn: () => dispatch(reviewActions.fetch()),
  selectReviewFn: data => dispatch(reviewActions.select(data)),
  toggleFn: status => dispatch(modalActions.toggle('search', status)),
})

class Reviews extends React.Component {
  componentWillMount() {
    const { users } = this.props
    const { id, authHeaders } = users

    if (id && authHeaders) {
      this.props.fetchReviewFn()
    }
  }

  writeReview = () => {
    const { dispatch } = this.props.screenProps.rootNavigation
    dispatch(
      NavigationActions.navigate({
        routeName: 'reviewForm',
      }),
    )
  }

  handleSelect = data => {
    this.props.selectReviewFn(data)
    const toReview = NavigationActions.navigate({
      routeName: 'review',
    })

    const { dispatch } = this.props.navigation
    dispatch(toReview)
  }

  keyExtractor = (item, index) => item.id

  render() {
    // TODO Change to data from api later
    const POST_COUNT = 0
    const { placeReviews, users, modals, toggleFn, navigation } = this.props
    const { reviews, loading } = placeReviews || {}
    const { id, authHeaders, firstName } = users
    const { search: searchModal } = modals

    if (!id || !authHeaders || !firstName) {
      return <OnboardTour />
    }
    if (searchModal) {
      return (
        <PlaceSearch
          toggleSearchFn={toggleFn}
          navigate={() => navigation.navigate({ routeName: 'placeReviews' })}
        />
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.innerWrapper}>
            <TouchableOpacity style={styles.searchIcon}>
              <Image source={images.searchTextInput} />
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

        <View style={styles.buttonReview}>
          <View style={styles.innerButtonReivew}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={this.writeReview}
                style={styles.button}
              >
                <Text style={styles.buttonTitle}>
                  {POST_COUNT > 0
                    ? 'Write Review'
                    : 'Write Your First Review to Earn Rewards'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recentReviewWrapper}>
              <Text style={styles.recentReviewText}>
                Recent Reviews in Your Area:
              </Text>
            </View>
          </View>
          {loading ? (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator size="large" color="#2F669C" />
            </View>
          ) : (
            <View style={styles.flatList}>
              <FlatList
                data={reviews}
                renderItem={({ item, index }) => (
                  <ReviewList
                    data={item}
                    index={index}
                    navigation={this.props.screenProps.rootNavigation}
                    handleSelect={this.handleSelect}
                  />
                )}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
