import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import images from '../../../assets/images'
import ReviewList from '../review-list'

import { actions } from '../../redux/modules/reviews'

const BUTTON_WIDTH = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  cancelWrapper: {
    marginTop: 10,
    marginBottom: 33,
    marginLeft: 10,
  },
  cancelText: {
    fontSize: 24,
    color: '#2F669C',
  },
  contactButton: {
    marginLeft: BUTTON_WIDTH,
    marginRight: BUTTON_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 20,
    backgroundColor: '#2F669C',
    borderRadius: 5,
  },
  profileWrapper: {
    marginBottom: 26,
    alignItems: 'center',
  },
  imageProfile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperMargin: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginTop: '2%',
    marginBottom: '5%',
  },
  ownerName: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  fullName: {
    fontSize: 16,
    color: '#A6A6A6',
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  flatListWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
})

const mapStateToProps = state => state.reviews

const mapDispatchToProps = dispatch => ({
  selectReviewFn: data => dispatch(actions.select(data)),
})

export class UserReview extends React.Component {
  state = {
    isSelected: false,
  }

  handleSelect = data => {
    this.props.selectReviewFn(data)
    const toReview = NavigationActions.navigate({
      routeName: 'review',
      params: {},
    })

    const { dispatch } = this.props.navigation
    dispatch(toReview)
  }

  toReviewList = () => {
    const { goBack } = this.props.navigation
    goBack()
  }

  keyExtractor = (item, index) => item.id.toString()

  render() {
    const { user } = this.props

    const {
      firstName,
      lastName,
      contactable,
      email,
      place,
      placeReviews: reviews,
      places,
    } = user
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={this.toReviewList}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            marginBottom: 20,
            paddingTop: 10,
            paddingLeft: 5,
          }}
        >
          <View
            style={{
              paddingRight: 5,
            }}
          >
            <Image
              source={images.back}
              resizeMode="contain"
              style={{ width: 10, height: 10 }}
            />
          </View>
          <View>
            <Text
              style={{
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                textDecorationColor: '#3d6587',
                color: '#4B7295',
                fontWeight: '700',
              }}
            >
              Back to Reviews
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.profileWrapper}>
          <Image
            source={images.tradePlumberIcon}
            style={styles.imageProfile}
            resizeMode="contain"
          />
        </View>
        <View style={styles.wrapperMargin}>
          <Text style={styles.cancelText}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={[styles.wrapperMargin, { marginTop: 10 }]}>
          <Text style={styles.fullName}>{place.name || ''}</Text>
        </View>
        {/* eslint-disable */}
        {this.state.isSelected ? (
          <View style={[styles.wrapperMargin, { marginTop: 10 }]}>
            <Text style={[styles.cancelText, { fontSize: 22 }]}>
              {`${email}`}
            </Text>
          </View>
        ) : contactable ? (
          <TouchableOpacity
            onPress={() => this.setState({ isSelected: contactable })}
            style={styles.contactButton}
          >
            <Text style={styles.contactText}>Contact</Text>
          </TouchableOpacity>
        ) : null}
        {/* eslint-enable */}
        <View style={[styles.wrapperMargin, { marginTop: 30 }]}>
          <Text style={[styles.cancelText, { color: '#4A4A4A' }]}>
            {`${reviews.length} Reviews Written`}
          </Text>
        </View>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={reviews}
            renderItem={({ item, index }) => (
              <ReviewList
                data={item}
                index={index}
                places={places}
                navigation={this.props.navigation}
                handleSelect={this.handleSelect}
              />
            )}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </ScrollView>
    )
  }
}
