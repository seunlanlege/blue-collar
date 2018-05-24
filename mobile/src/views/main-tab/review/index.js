import React from 'react'
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import images from '../../../../assets/images'

import SelectStarRating from '../../shared/select-star-rating'
import SelectButton from '../../shared/select-button'

import { actions as reviewActions } from '../../../redux/modules/reviews'

import {
  formatContactType,
  countStarOverall,
  formatDate,
} from '../../../helpers'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  cancelText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#2F669C',
  },
  profileWrapper: {
    marginBottom: 12,
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
  ownerName: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  rateTextWrapper: {
    marginTop: 20,
    marginLeft: 20,
  },
  secondaryText: {
    color: '#9B9B9B',
    fontSize: 20,
  },
  overallWrapper: {
    marginTop: 20,
  },
  overall: {
    textAlign: 'center',
    color: '#4A4A4A',
    fontSize: 24,
  },
  overallRating: {
    marginLeft: 20,
    marginRight: 20,
  },
  review: {
    marginTop: 20,
    backgroundColor: '#EAF3FA',
    padding: 20,
  },
  reviewText: {
    fontSize: 18,
    color: '#6E7377',
    paddingLeft: 20,
  },
  companyName: {
    fontSize: 20,
    color: '#4A4A4A',
  },
  ownerStatus: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  marginLeft20: {
    marginLeft: 20,
  },
  marginRight20: {
    marginRight: 20,
  },
  lostPrice: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 80,
  },
})

const navigateToUserReview = NavigationActions.navigate({
  routeName: 'userReview',
  params: {},
})

const mapDispatchToProps = dispatch => ({
  getUserFn: userId => dispatch(reviewActions.getUser(userId)),
})

const mapStateToProps = state => ({
  placeReview: state.reviews,
})

class Review extends React.Component {
  componentDidMount() {
    const { placeReview } = this.props
    const { selectedReview } = placeReview
    const { review } = selectedReview
    this.props.getUserFn(review.userId) // fetch reviewer id
  }

  toReviewList = () => {
    this.props.navigation.goBack()
  }

  toUserReview = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateToUserReview)
  }

  render() {
    const { placeReview } = this.props
    const { selectedReview, user, loading } = placeReview
    const { review, place } = selectedReview
    const {
      boughtMaterials,
      comments,
      createdAt,
      dollarsLost,
      otherPartyInvolved,
      pocName,
      pocType,
      starBidProcess,
      starChangeOrdersAccepted,
      starJobCompleted,
      starPaymentsSatisfaction,
      starTimeRespected,
      starWorkWithAgain,
    } = review

    const starOverall = countStarOverall({
      starBidProcess,
      starChangeOrdersAccepted,
      starJobCompleted,
      starPaymentsSatisfaction,
      starTimeRespected,
      starWorkWithAgain,
    })
    const { formatted_address: formattedAddress } = place
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
          <Image source={images.tradePlumberIcon} style={styles.imageProfile} />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#2F669C" />
        ) : (
          <TouchableOpacity onPress={this.toUserReview}>
            <Text
              style={[
                styles.cancelText,
                {
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingBottom: 4,
                },
              ]}
            >
              {user ? `${user.firstName} ${user.lastName}` : ''}
            </Text>
          </TouchableOpacity>
        )}

        <View>
          <Text
            style={[
              styles.cancelText,
              {
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                textDecorationLine: 'none',
              },
            ]}
          >
            {pocName || ''}
          </Text>
        </View>

        <View style={[styles.rateTextWrapper, { paddingLeft: 20 }]}>
          <View>
            <Text style={[styles.companyName, { fontWeight: 'bold' }]}>
              {formattedAddress || ''}
            </Text>
          </View>
          <View>
            {/* <Text style={styles.secondaryText}>{formattedAddress || ''}</Text> */}
            <Text style={styles.secondaryText}>{pocName || ''}</Text>
            <Text style={styles.secondaryText}>
              {formatDate(createdAt) || ''}
            </Text>
            <Text style={styles.secondaryText}>
              {formatContactType(pocType) || ''}
            </Text>
          </View>
          <View />
        </View>
        <View style={styles.review}>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 18,
              fontWeight: 'bold',
              paddingBottom: 10,
            }}
          >
            {`Contractor's Comments:`}
          </Text>
          <Text style={[styles.reviewText, { fontSize: 14 }]}>
            {comments || ''}
          </Text>
        </View>
        <View style={styles.overallWrapper}>
          <Text style={styles.overall}>Overall Rating:</Text>
        </View>
        <View style={styles.overallRating}>
          <SelectStarRating count={starOverall} disabled />
        </View>
        <View style={styles.ownerStatus} />
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>Bid Process:</Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={starBidProcess} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              {'Scope of work understood / change orders accepted:'}
            </Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={starChangeOrdersAccepted} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>Your time was respected:</Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={starTimeRespected} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Job completed without customer interference:
            </Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={starJobCompleted} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Payment were made to your satisfaction:
            </Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={starPaymentsSatisfaction} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>Would work with again:</Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={starWorkWithAgain} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Did home owner buy material?
            </Text>
          </View>
          <View>
            <SelectButton marginTop={-20} selected={boughtMaterials} disabled />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Did home owner buy material?
            </Text>
          </View>
          <View>
            <SelectButton
              marginTop={-20}
              selected={otherPartyInvolved}
              disabled
            />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Estimated $ lost on project:
            </Text>
          </View>
          <View style={styles.lostPrice}>
            <Text
              style={[
                styles.secondaryText,
                { color: '#537294', fontSize: 28, fontWeight: 'bold' },
              ]}
            >
              ${Math.floor(dollarsLost)}
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
