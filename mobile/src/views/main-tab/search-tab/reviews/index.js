import React from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import PlaceSearch from '../../place-search'
import ReviewList from '../../review-list'
import PlaceResultList from '../../place-result-list'

import { reviewActions } from '../../../../redux/modules/reviews'

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
  places: state.places,
})

const mapDispatchToProps = dispatch => ({
  fetchReviewFn: () => dispatch(reviewActions.fetch()),
  selectReviewFn: data => dispatch(reviewActions.select(data)),
})

class Reviews extends React.Component {
  componentWillMount() {
    this.props.fetchReviewFn()
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
    const { placeReviews, places } = this.props
    const { reviews, loading } = placeReviews || {}
    const { results, isActiveSearch } = places || {}
    return (
      <View style={styles.container}>
        <PlaceSearch />
        {isActiveSearch && results.length > 0 ? (
          <View style={styles.buttonReview}>
            <View style={styles.innerButtonReivew}>
              <View style={styles.flatList}>
                <FlatList
                  data={results}
                  renderItem={({ item, index }) => (
                    <PlaceResultList
                      data={item}
                      index={index}
                      navigation={this.props.navigation}
                    />
                  )}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            </View>
          </View>
        ) : (
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
                      navigation={this.props.navigation}
                      handleSelect={this.handleSelect}
                    />
                  )}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            )}
          </View>
        )}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
