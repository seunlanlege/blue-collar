import React from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import CircleRadioButton from '../../shared/circle-radio-button'
import PlaceSearch from '../../place-search'

import StarRating from '../../shared/star-rating'
import SelectButton from '../../shared/select-button'
// import BusinessAddress from '../../shared/business-address'
import WebViewModal from '../../shared/modal-webview'

import { actions } from '../../../redux/modules/reviews'
import { actions as placeActions } from '../../../redux/modules/places'
import { actions as modalActions } from '../../../redux/modules/modals'

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
    color: '#9B9B9B',
  },
  title: {
    fontSize: 23,
    color: '#2F669C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wrapperMargin: {
    marginLeft: 20,
    marginRight: 20,
  },
  address: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  addressWrapper: {
    marginTop: 10,
  },
  threeTextInput: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  apt: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 90,
  },
  state: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 80,
  },
  zip: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 90,
  },
  city: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  ownerName: {
    paddingLeft: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  circleButtonWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  rateTextWrapper: {
    marginTop: 20,
    marginLeft: 20,
  },
  rateText: {
    fontSize: 20,
    color: '#4A4A4A',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#979797',
    fontWeight: 'bold',
  },
  estimated: {
    margin: 20,
    marginRight: 60,
  },
  estimatedTitle: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  estimatedText: {
    fontSize: 16,
    paddingLeft: 20,
    height: 58,
    width: '65%',
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  commentWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  commentText: {
    fontSize: 20,
    color: '#9B9B9B',
  },
  wordCountWrapper: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  wordCount: {
    color: '#E4E4E4',
    textAlign: 'right',
    paddingRight: 5,
    paddingTop: 5,
  },
  textInputComment: {
    height: 150,
    textAlign: 'left',
    paddingLeft: 10,
    borderColor: '#E4E4E4',
    fontSize: 16,
  },
  submitWrapper: {
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 60,
    marginRight: 60,
  },
  wrapperButton: {
    height: 45,
    borderRadius: 5,
    backgroundColor: '#2F669C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
})

const navigateReviewListAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
})

const mapStateToProps = state => ({
  reviews: state.reviews,
  modals: state.modals,
})

const mapDispatchToProps = dispatch => ({
  updateFieldFn: (field, value) => dispatch(actions.updateField(field, value)),
  searchPlaceFn: (lat, long, query) =>
    dispatch(placeActions.search(lat, long, query)),
  postReviewFn: payload => dispatch(actions.post(payload)),
  toggleSearchFn: status => dispatch(modalActions.toggle('search', status)),
})

class WriteReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.reviews.reviewId &&
      nextProps.reviews.reviewId !== this.props.reviews.reviewId
    ) {
      this.props.navigation.navigate({ routeName: 'mainTab' })
    }
  }

  onCancel = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateReviewListAction)
  }

  handleSubmit = () => {
    const { reviews, postReviewFn } = this.props
    const {
      pocName,
      pocType,
      comments,
      starBidProcess,
      starChangeOrdersAccepted,
      starTimeRespected,
      starJobCompleted,
      starPaymentsSatisfaction,
      starWorkWithAgain,
      boughtMaterials,
      otherPartyInvolved,
      dollarsLost,
      placeId,
      name,
      vicinity,
    } = reviews

    const place = {
      googleId: placeId,
      name,
      vicinity,
      category: 2,
    }
    const starOverall = Math.floor(
      (starBidProcess +
        starChangeOrdersAccepted +
        starTimeRespected +
        starJobCompleted +
        starPaymentsSatisfaction +
        starWorkWithAgain) /
        6,
    )
    const reviewForm = {
      pocName,
      pocType,
      comments,
      starBidProcess,
      starChangeOrdersAccepted,
      starTimeRespected,
      starJobCompleted,
      starPaymentsSatisfaction,
      starWorkWithAgain,
      starOverall,
      boughtMaterials,
      otherPartyInvolved,
      dollarsLost,
    }
    postReviewFn({ place, reviewForm })
  }

  toggleWebViewModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  keyExtractor = (item, index) => item.id

  render() {
    const { reviews, modals, toggleSearchFn, updateFieldFn } = this.props
    const { search } = modals
    const {
      pocName,
      comments,
      dollarsLost,
      pocType,
      loading,
      vicinity,
    } = reviews
    if (search) {
      return (
        <PlaceSearch
          toggleSearchFn={toggleSearchFn}
          updateFieldFn={updateFieldFn}
        />
      )
    }
    return (
      <ScrollView style={styles.container}>
        <WebViewModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleWebViewModal}
          // TODO change this url with actual pdf code of conduct
          uri="https://www.ibanet.org/Document/Default.aspx?DocumentUid=1730FC33-6D70-4469-9B9D-8A12C319468C"
        />

        <View>
          <TouchableOpacity
            onPress={this.onCancel}
            style={styles.cancelWrapper}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 26 }}>
            <Text style={styles.title}>Write a Review</Text>
          </View>

          <TouchableOpacity
            onPress={this.toggleWebViewModal}
            style={{ marginBottom: 26 }}
          >
            <Text style={[styles.cancelText, { textAlign: 'center' }]}>
              Legal Code of Conduct
            </Text>
          </TouchableOpacity>
          <View style={styles.wrapperMargin}>
            <TextInput
              placeholder="Street Address"
              style={styles.address}
              onChangeText={() => {}}
              onFocus={toggleSearchFn}
              value={vicinity}
            />

            {/* <View style={styles.threeTextInput}>
                          <TextInput placeholder="Apt #" style={styles.apt} />
                          <TextInput placeholder="State" style={styles.state} />
                          <TextInput placeholder="Zip" style={styles.zip} />
                        </View>
                        <View style={styles.addressWrapper}>
                          <TextInput placeholder="City" style={styles.city} />
                        </View> */}
            <View style={styles.addressWrapper}>
              <TextInput
                placeholder="Client Name"
                style={styles.ownerName}
                onChangeText={text => updateFieldFn('pocName', text)}
                value={pocName}
                autoCorrect={false}
              />
            </View>
            <View style={styles.circleButtonWrapper}>
              <View>
                <CircleRadioButton
                  isSelected={pocType === 1}
                  size={15}
                  title="Home Owner"
                  fontSize={20}
                  handleChange={() => updateFieldFn('pocType', 1)}
                  value={1}
                />
              </View>
              <View style={styles.addressWrapper}>
                <CircleRadioButton
                  isSelected={pocType === 2}
                  size={15}
                  title="Property Manager"
                  fontSize={20}
                  handleChange={() => updateFieldFn('pocType', 2)}
                  value={2}
                />
              </View>
              <View style={styles.addressWrapper}>
                <CircleRadioButton
                  isSelected={pocType === 3}
                  size={15}
                  title="Landlord"
                  fontSize={20}
                  handleChange={() => updateFieldFn('pocType', 3)}
                  value={3}
                />
              </View>
            </View>
          </View>

          <View style={styles.rateTextWrapper}>
            <Text style={styles.rateText}>Rate Your Experience</Text>
          </View>
          <StarRating
            title="Bid Process:"
            fieldName="starBidProcess"
            handleChange={updateFieldFn}
          />
          <StarRating
            title="Scope of work understood / change orders accepted:"
            fieldName="starChangeOrdersAccepted"
            handleChange={updateFieldFn}
          />
          <StarRating
            title="Your time was respected:"
            fieldName="starTimeRespected"
            handleChange={updateFieldFn}
          />
          <StarRating
            title="Job completed without customer interference:"
            fieldName="starJobCompleted"
            handleChange={updateFieldFn}
          />
          <StarRating
            title="Payment were made to your satisfaction:"
            fieldName="starPaymentsSatisfaction"
            handleChange={updateFieldFn}
          />
          <StarRating
            title="Would work with again"
            fieldName="starWorkWithAgain"
            handleChange={updateFieldFn}
          />
          <SelectButton
            title="Did home owner buy material?"
            fieldName="boughtMaterials"
            handleChange={updateFieldFn}
          />
          <SelectButton
            title="Designer or architect involved"
            fieldName="otherPartyInvolved"
            handleChange={updateFieldFn}
          />
          <View style={styles.estimated}>
            <View>
              <Text style={styles.estimatedTitle}>
                {'Estimated $ lost on project:'}
              </Text>
            </View>
            <View style={styles.addressWrapper}>
              <TextInput
                placeholder="$"
                style={styles.estimatedText}
                onChangeText={text => updateFieldFn('dollarsLost', text)}
                value={dollarsLost}
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.commentWrapper}>
            <View>
              <Text style={styles.commentText}>Comment:</Text>
            </View>
            <View style={styles.wordCountWrapper}>
              <Text style={styles.wordCount}>
                {comments.toString().length} / 140
              </Text>
              <TextInput
                placeholder="Your professional opinion matters..."
                multiline
                editable
                autoCorrect={false}
                style={styles.textInputComment}
                onChangeText={text => updateFieldFn('comments', text)}
                value={comments}
              />
            </View>
          </View>

          <View style={styles.submitWrapper}>
            {loading ? (
              <ActivityIndicator color="blue" size="large" />
            ) : (
              <TouchableOpacity
                style={styles.wrapperButton}
                onPress={this.handleSubmit}
              >
                <Text style={styles.submitText}>Submit Review</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview)
