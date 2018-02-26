import React from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import images from '../../../../assets/images'
import ReviewList from '../review-list'

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
    flex: 0.4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
})

const mapStateToProps = state => state.review

const mapDispatchToProps = dispatch => ({
  fetchReviewFn: () => dispatch(writeReviewActions.fetchReview()),
})

class WriteReview extends React.Component {
  componentWillMount() {
    this.props.fetchReviewFn()
  }
  handleChange = () => {}

  keyExtractor = (item, index) => item.id

  render() {
    // TODO Change to data from api later
    const POST_COUNT = 0

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity style={styles.searchIcon}>
              <Image source={images.searchTextInput} />
            </TouchableOpacity>
            <View style={styles.textInputContainer}>
              <TextInput placeholder="Search" style={styles.textInput} />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.6,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 1.2,
              justifyContent: 'flex-end',
              width: '75%',
            }}
          >
            <TouchableOpacity
              style={{
                height: SEARCH_HEIGHT + 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2F669C',
                borderRadius: 5,
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 11 }}>
                {POST_COUNT > 0
                  ? 'Write Review'
                  : 'Write Your First Review to Earn Rewards'}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: '#9B9B9B' }}>
              Recent Reviews in Your Area:
            </Text>
          </View>
        </View>
        {this.props.loading ? (
          <View
            style={{
              flex: 1.3,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size="large" color="#2F669C" />
          </View>
        ) : (
          <View
            style={{
              flex: 1.3,
              flexDirection: 'row',
            }}
          >
            <FlatList
              data={this.props.reviews}
              renderItem={({ item, index }) => (
                <ReviewList data={item} index={index} />
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
        )}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview)
