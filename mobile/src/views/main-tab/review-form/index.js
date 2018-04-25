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
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import PlaceSearch from '../../place-search'

import WebViewModal from '../../shared/modal-webview'

import { actions } from '../../../redux/modules/reviews'
import { actions as modalActions } from '../../../redux/modules/modals'
import {
  TextInputField,
  SelectButtonForm,
  StarRatingForm,
  CircleRadioButtonForm,
} from '../../shared/redux-form'

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

  handleSubmit = ({
    pocName,
    pocType,
    starBidProcess,
    starChangeOrdersAccepted,
    starTimeRespected,
    starJobCompleted,
    starPaymentsSatisfaction,
    starWorkWithAgain,
    otherPartyInvolved,
    boughtMaterials,
    dollarsLost,
    comments,
  }) => {
    const { reviews, postReviewFn } = this.props
    const { placeId, name, vicinity } = reviews

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
    const {
      reviews,
      modals,
      toggleSearchFn,
      updateFieldFn,
      handleSubmit,
    } = this.props
    const { search } = modals
    const { pocType, loading, vicinity } = reviews
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
              onFocus={() => toggleSearchFn(true)}
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
              <Field
                name="pocName"
                component={TextInputField}
                placeholder="Client Name"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.ownerName}
              />
            </View>
            <View style={styles.circleButtonWrapper}>
              <View>
                <Field
                  isSelected={pocType === 1}
                  size={15}
                  title="Home Owner"
                  fontSize={20}
                  content={1}
                  name="pocType"
                  component={CircleRadioButtonForm}
                  onSelected={() => updateFieldFn('pocType', 1)}
                />
              </View>
              <View style={styles.addressWrapper}>
                <Field
                  isSelected={pocType === 2}
                  size={15}
                  title="Property Manager"
                  fontSize={20}
                  content={2}
                  name="pocType"
                  component={CircleRadioButtonForm}
                  onSelected={() => updateFieldFn('pocType', 2)}
                />
              </View>
              <View style={styles.addressWrapper}>
                <Field
                  isSelected={pocType === 3}
                  size={15}
                  title="Landlord"
                  fontSize={20}
                  content={3}
                  name="pocType"
                  component={CircleRadioButtonForm}
                  onSelected={() => updateFieldFn('pocType', 3)}
                />
              </View>
            </View>
          </View>

          <View style={styles.rateTextWrapper}>
            <Text style={styles.rateText}>Rate Your Experience</Text>
          </View>
          <Field
            title="Bid Process:"
            name="starBidProcess"
            component={StarRatingForm}
          />
          <Field
            title="Scope of work understood / change orders accepted:"
            name="starChangeOrdersAccepted"
            component={StarRatingForm}
          />
          <Field
            title="Your time was respected:"
            name="starTimeRespected"
            component={StarRatingForm}
          />
          <Field
            title="Job completed without customer interference:"
            name="starJobCompleted"
            component={StarRatingForm}
          />
          <Field
            title="Payment were made to your satisfaction:"
            name="starPaymentsSatisfaction"
            component={StarRatingForm}
          />
          <Field
            title="Would work with again"
            name="starWorkWithAgain"
            component={StarRatingForm}
          />

          <Field
            title="Did home owner buy material?"
            name="boughtMaterials"
            component={SelectButtonForm}
          />
          <Field
            title="Designer or architect involved"
            name="otherPartyInvolved"
            component={SelectButtonForm}
          />
          <View style={styles.estimated}>
            <View>
              <Text style={styles.estimatedTitle}>
                {'Estimated $ lost on project:'}
              </Text>
            </View>
            <View style={styles.addressWrapper}>
              <Field
                name="dollarsLost"
                component={TextInputField}
                placeholder="$"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.estimatedText}
              />
            </View>
          </View>

          <View style={styles.commentWrapper}>
            <View>
              <Text style={styles.commentText}>Comment:</Text>
            </View>
            <View style={styles.wordCountWrapper}>
              <Text style={styles.wordCount}>0 / 140</Text>
              <Field
                name="comments"
                component={TextInputField}
                placeholder="Your professional opinion matters..."
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                multiline
                editable
                style={styles.textInputComment}
              />
            </View>
          </View>

          <View style={styles.submitWrapper}>
            {loading ? (
              <ActivityIndicator color="blue" size="large" />
            ) : (
              <TouchableOpacity
                style={styles.wrapperButton}
                onPress={handleSubmit(this.handleSubmit)}
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

const WriteReviewForm = reduxForm({ form: 'writereview' })(WriteReview)

export default connect(mapStateToProps, mapDispatchToProps)(WriteReviewForm)
