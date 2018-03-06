import React from 'react'
import {
  Dimensions,
  FlatList,
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

import images from '../../../../assets/images'
import ReviewList from '../review-list'
import SelectButton from '../../shared/search-select'
import SelectStarRating from '../../shared/select-star-rating'

import { writeReviewActions } from '../../../redux/modules/review'

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
    flex: 1,
    marginTop: '10%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    width: '85%',
    flexDirection: 'row',
  },
  buttonReview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
  },
  textInput: {
    height: SEARCH_HEIGHT,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'rgba(151,151,151,0.1)',
    paddingLeft: 12,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
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
})

const mapStateToProps = state => state.review

const mapDispatchToProps = dispatch => ({
  fetchReviewFn: () => dispatch(writeReviewActions.fetchReview()),
  searchReviewFn: query => dispatch(writeReviewActions.searchReview(query)),
})

class SelectedResult extends React.Component {
  componentWillMount() {
    this.props.fetchReviewFn()
  }

  handleChange = text => this.props.searchReviewFn(text)

  writeReview = () => {
    const navigateReviewFormAction = NavigationActions.navigate({
      routeName: 'ReviewForm',
      params: {},
    })
    const { dispatch } = this.props.navigation
    dispatch(navigateReviewFormAction)
  }

  keyExtractor = (item, index) => item.id

  render() {
    return (
      <ScrollView>
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
                  onFocus={this.handleFocus}
                  onBlur={this.handleFocus}
                  onChangeText={text => this.handleChange(text)}
                />
              </View>
            </View>
          </View>
          <View style={styles.innerButtonReivew}>
            <View style={styles.buttonWrapper}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2F669C',
                    textAlign: 'center',
                  }}
                >
                  Were you recently contacted to bid a job at this location?
                </Text>
              </View>
              <View>
                <SelectButton />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#2F669C',
              width: '100%',
              height: '4%',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>
              6 active bids at this property
            </Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: '#2F669C', fontSize: 20 }}>
              7 Reviews of this property
            </Text>
          </View>
          <SelectStarRating />
          <View style={styles.flatList}>
            <FlatList
              data={this.props.reviews.splice(0, 5)}
              renderItem={({ item, index }) => (
                <ReviewList data={item} index={index} />
              )}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedResult)
