import React from 'react'
import {
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import images from '../../../../assets/images'
import ReviewList from '../review-list'
import SelectStarRating from '../../shared/select-star-rating'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewWrapper: {
    width: '80%',
    justifyContent: 'center',
    marginTop: 15,
  },
  reviewText: {
    color: '#2F669C',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
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

class Result extends React.Component {
  keyExtractor = (item, index) => item.id
  render() {
    const { navigation, reviews, writeReview, handleSelect } = this.props
    return (
      <View style={styles.container}>
        {reviews && reviews.length > 0 ? (
          <View style={styles.innerContainer}>
            <View style={styles.reviewWrapper}>
              <Text style={styles.reviewText}>7 Reviews of this property</Text>
              <SelectStarRating />
            </View>
            <View style={styles.flatList}>
              <FlatList
                data={reviews.splice(0, 5)}
                renderItem={({ item, index }) => (
                  <ReviewList
                    data={item}
                    index={index}
                    navigation={navigation}
                    handleSelect={handleSelect}
                  />
                )}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
              />
            </View>
          </View>
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
                onPress={() => writeReview()}
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
    )
  }
}

export default Result
