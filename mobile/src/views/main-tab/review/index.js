import React from 'react'
import {
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

import { formatContactType, formatDate } from '../../../helpers'

const styles = StyleSheet.create({
  container: {
    top: 20,
    backgroundColor: '#FFFFFF',
  },
  cancelWrapper: {
    marginTop: 10,
    marginBottom: 28,
    marginLeft: 10,
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

const mapStateToProps = state => ({
  selectedReview: state.reviews.selectedReview,
})

class Review extends React.Component {
  toReviewList = () => {
    this.props.navigation.goBack()
  }

  toUserReview = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateToUserReview)
  }

  render() {
    const { selectedReview } = this.props
    const {
      client_name: clientName,
      created_at: createdAt,
      point_of_contact_type: pointOfContactType,
      star_overall: starOverll,
      star_bid_process: startBidProcess,
      star_change_orders_accepted: starChangeOrdersAccepted,
      star_time_respected: starTimeRespected,
      star_job_completed: starJobCompleted,
      star_payments_satifaction: startPaymentSaticfaction,
      star_work_with_again: starWorkWithAgain,
      bought_materials: boughtMaterials,
      other_party_involved: otherPartyInvolved,
      dollars_lost: dollarsLost,
      comments,
      place,
    } =
      selectedReview || {}

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={this.toReviewList}
          style={styles.cancelWrapper}
        >
          <Image source={images.backToReview} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.profileWrapper}>
          <Image source={images.tradePlumberIcon} style={styles.imageProfile} />
        </View>

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
            {clientName || ''}
          </Text>
        </TouchableOpacity>

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
            {place.name || ''}
          </Text>
        </View>

        <View style={[styles.rateTextWrapper, { paddingLeft: 20 }]}>
          <View>
            <Text style={[styles.companyName, { fontWeight: 'bold' }]}>
              {place.name || ''}
            </Text>
          </View>
          <View>
            <Text style={styles.secondaryText}>{place.vicinity || ''}</Text>
            <Text style={styles.secondaryText}>{place.name}</Text>
            <Text style={styles.secondaryText}>
              {formatDate(createdAt) || ''}
            </Text>
            <Text style={styles.secondaryText}>
              {formatContactType(pointOfContactType) || ''}
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
          <SelectStarRating count={starOverll} disabled />
        </View>
        <View style={styles.ownerStatus} />
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>Bid Process:</Text>
          </View>
          <View style={{ width: '80%' }}>
            <SelectStarRating count={startBidProcess} disabled />
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
            <SelectStarRating count={startPaymentSaticfaction} disabled />
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

export default connect(mapStateToProps)(Review)
