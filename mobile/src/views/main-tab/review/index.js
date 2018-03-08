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

const styles = StyleSheet.create({
  container: {
    top: 20,
    backgroundColor: '#FFFFFF',
  },
  cancelWrapper: {
    marginTop: 10,
    marginBottom: 33,
    marginLeft: 10,
  },
  cancelText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#2F669C',
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

const navigateToReviewList = NavigationActions.navigate({
  routeName: 'Maintab',
  params: {},
  action: NavigationActions.navigate({ routeName: 'writeReview' }),
})

const navigateToUserReview = NavigationActions.navigate({
  routeName: 'Maintab',
  params: {},
  action: NavigationActions.navigate({ routeName: 'userReview' }),
})

const mapStateToProps = state => state.review

class Review extends React.Component {
  toReviewList = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateToReviewList)
  }

  toUserReview = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateToUserReview)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={this.toReviewList}
          style={styles.cancelWrapper}
        >
          <Image source={images.backToReview} />
        </TouchableOpacity>
        <View style={styles.profileWrapper}>
          <Image source={images.tradePlumberIcon} style={styles.imageProfile} />
        </View>
        <View style={styles.wrapperMargin}>
          <TouchableOpacity onPress={this.toUserReview}>
            <Text style={styles.cancelText}>John Chew</Text>
          </TouchableOpacity>
          <View>
            <Text style={[styles.cancelText, { textDecorationLine: 'none' }]}>
              {' '}
              - John Smith Landscape
            </Text>
          </View>
        </View>

        <View style={styles.rateTextWrapper}>
          <View>
            <Text style={styles.companyName}>
              {this.props.selectedReview.company_name}
            </Text>
          </View>
          <View>
            <Text style={styles.secondaryText}>
              {this.props.selectedReview.company_address}
            </Text>
            <Text style={styles.secondaryText}>
              {this.props.selectedReview.owner}
            </Text>
            <Text style={styles.secondaryText}>
              {this.props.selectedReview.review_date}
            </Text>
            <Text style={styles.secondaryText}>Home Owner</Text>
          </View>
          <View />
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewText}>
            {this.props.selectedReview.review}
          </Text>
        </View>
        <View style={styles.overallWrapper}>
          <Text style={styles.overall}>Overall Rating:</Text>
        </View>
        <View style={styles.overallRating}>
          <SelectStarRating />
        </View>
        <View style={styles.ownerStatus} />
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>Home Owner:</Text>
          </View>
          <View style={styles.marginRight20}>
            <SelectStarRating />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              {'Scope of work understood / change orders accepted:'}
            </Text>
          </View>
          <View style={styles.marginRight20}>
            <SelectStarRating />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>Your time was respected:</Text>
          </View>
          <View style={styles.marginRight20}>
            <SelectStarRating />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Job completed without customer interference:
            </Text>
          </View>
          <View style={styles.marginLeft20}>
            <SelectStarRating />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Payment were made to your satisfaction:
            </Text>
          </View>
          <View style={styles.marginLeft20}>
            <SelectStarRating />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Did home owner buy material?
            </Text>
          </View>
          <View>
            <SelectButton marginTop={-20} />
          </View>
        </View>
        <View style={styles.rateTextWrapper}>
          <View style={styles.marginLeft20}>
            <Text style={styles.secondaryText}>
              Did home owner buy material?
            </Text>
          </View>
          <View>
            <SelectButton marginTop={-20} />
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
              style={[styles.secondaryText, { color: '#537294', fontSize: 28 }]}
            >
              $ 3000
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(Review)
