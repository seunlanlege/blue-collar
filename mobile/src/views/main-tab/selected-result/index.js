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
  textUpperButton: {
    fontSize: 16,
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
    backgroundColor: '#2F669C',
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
  bidText: {
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

const mapStateToProps = state => state.review

const mapDispatchToProps = dispatch => ({
  fetchReviewFn: () => dispatch(writeReviewActions.fetchReview()),
  searchReviewFn: query => dispatch(writeReviewActions.searchReview(query)),
  selectReviewFn: data => dispatch(writeReviewActions.selectReview(data)),
})

class SelectedResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: false,
    }
  }
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

  handleSelect = data => {
    this.props.selectReviewFn(data)
    const toReview = NavigationActions.navigate({
      routeName: 'Maintab',
      params: {},
      action: NavigationActions.navigate({ routeName: 'selectedReview' }),
    })
    const { dispatch } = this.props.navigation
    dispatch(toReview)
  }

  keyExtractor = (item, index) => item.id

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.innerWrapper}>
              <TouchableOpacity
                style={styles.searchIcon}
                onPress={() => this.setState({ result: !this.state.result })}
              >
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
              <Text style={styles.textUpperButton}>
                Were you recently contacted to bid a job at this location?
              </Text>

              <View>
                <SelectButton />
              </View>
            </View>
          </View>
          <View style={styles.bidCounter}>
            <Text style={styles.bidText}>
              {`${this.state.result ? 6 : 0} active bids at this property`}
            </Text>
          </View>

          {this.state.result ? (
            <View>
              <View style={{ marginTop: 15 }}>
                <Text style={{ color: '#2F669C', fontSize: 20 }}>
                  7 Reviews of this property
                </Text>
              </View>
              <SelectStarRating />
            </View>
          ) : null}
          <View style={this.state.result ? styles.flatList : { width: '80%' }}>
            {this.state.result ? (
              <FlatList
                data={this.props.reviews.splice(0, 5)}
                renderItem={({ item, index }) => (
                  <ReviewList
                    data={item}
                    index={index}
                    navigation={this.props.navigation}
                    handleSelect={this.handleSelect}
                  />
                )}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            ) : (
              <View style={styles.marginTop20}>
                <View style={styles.itemCenter}>
                  <Image source={images.noResult} />
                </View>
                <View style={styles.noresultWrapper}>
                  <Text style={styles.textNoResult}>No Search Result</Text>
                </View>
                <View style={styles.buttonNoResult}>
                  <TouchableOpacity
                    onPress={this.writeReview}
                    style={styles.button}
                  >
                    <Text style={styles.buttonTitle}>
                      Be The First to Write a Review
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.recentReviewWrapper}>
                  <Text style={styles.recentReviewText}>
                    Recent Reviews in Your Area:
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedResult)
