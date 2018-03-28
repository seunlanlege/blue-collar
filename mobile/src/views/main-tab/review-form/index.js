import React from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Constants, Location, Permissions } from 'expo'

import CircleRadioButton from '../../shared/circle-radio-button'

import StarRating from '../../shared/star-rating'
import SelectButton from '../../shared/select-button'
import BusinessAddress from '../../shared/business-address'

import { reviewActions } from '../../../redux/modules/reviews'
import { placeActions } from '../../../redux/modules/places'

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
    height: 35,
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
  places: state.places,
})

const mapDispatchToProps = dispatch => ({
  updateFieldFn: (field, value) =>
    dispatch(reviewActions.updateField(field, value)),
  searchPlaceFn: (lat, long, query) =>
    dispatch(placeActions.search(lat, long, query)),
  postReviewFn: () => dispatch(reviewActions.post()),
})

class WriteReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      long: null,
      streetAddress: '',
      isActiveSearch: false,
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      )
    } else {
      this.getLocationAsync()
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

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied')
    }

    const { coords } = await Location.getCurrentPositionAsync({})
    const { latitude, longitude } = coords
    this.setState({ lat: latitude, long: longitude })
  }

  handleChange = (field, value) => {
    this.props.updateFieldFn(field, value)
  }

  handleSearch = query => {
    const { lat, long } = this.state
    if (query.length === 0) {
      this.setState({ streetAddress: query, isActiveSearch: false })
    } else {
      this.setState({ streetAddress: query, isActiveSearch: true })
      this.props.searchPlaceFn(lat, long, query)
    }
  }

  handleStreetAddress = (vicinity, googlePlaceId, name) => {
    this.setState({ streetAddress: vicinity, isActiveSearch: false })
    this.handleChange('vicinity', vicinity)
    this.handleChange('googlePlaceId', googlePlaceId)
    this.handleChange('name', name)
  }

  handleSubmit = () => {
    this.props.postReviewFn()
  }

  keyExtractor = (item, index) => item.id

  render() {
    const { reviews, places } = this.props
    const { results } = places
    const {
      clientName,
      comments,
      dollarsLost,
      pointOfContactType,
      loading,
    } = reviews
    return (
      <ScrollView style={styles.container}>
        {this.state.isActiveSearch ? (
          <TextInput
            placeholder="Street Address"
            style={styles.address}
            onChangeText={text => this.handleSearch(text)}
            value={this.state.streetAddress}
          />
        ) : null}

        {this.state.isActiveSearch ? (
          <View
            style={{
              position: 'absolute',
              top: 40,
              width: '100%',
              backgroundColor: '#EAEAEA',
            }}
          >
            <FlatList
              data={results}
              renderItem={({ item, index }) => (
                <BusinessAddress
                  data={item}
                  index={index}
                  navigation={() => {}}
                  handleChange={this.handleStreetAddress}
                />
              )}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        ) : (
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
            <View style={styles.wrapperMargin}>
              {/* Integrate this with google search api */}
              <TextInput
                placeholder="Street Address"
                style={styles.address}
                onChangeText={text => this.handleSearch(text)}
                value={this.state.streetAddress}
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
                  onChangeText={text => this.handleChange('clientName', text)}
                  value={clientName}
                />
              </View>
              <View style={styles.circleButtonWrapper}>
                <View>
                  <CircleRadioButton
                    isSelected={pointOfContactType === 'home_owner'}
                    size={15}
                    title="Home Owner"
                    fontSize={20}
                    handleChange={() =>
                      this.handleChange('pointOfContactType', 'home_owner')
                    }
                  />
                </View>
                <View style={styles.addressWrapper}>
                  <CircleRadioButton
                    isSelected={
                      pointOfContactType === 'business_or_property_manager'
                    }
                    size={15}
                    title="Property Manager"
                    fontSize={20}
                    handleChange={() =>
                      this.handleChange(
                        'pointOfContactType',
                        'business_or_property_manager',
                      )
                    }
                  />
                </View>
                <View style={styles.addressWrapper}>
                  <CircleRadioButton
                    isSelected={pointOfContactType === 'landlord'}
                    size={15}
                    title="Landlord"
                    fontSize={20}
                    handleChange={() =>
                      this.handleChange('pointOfContactType', 'landlord')
                    }
                  />
                </View>
              </View>
            </View>

            <View style={styles.rateTextWrapper}>
              <Text style={styles.rateText}>How would you rate these?</Text>
            </View>
            <StarRating
              title="Bid Process:"
              fieldName="startBidProcess"
              handleChange={this.handleChange}
            />
            <StarRating
              title="Scope of work understood / change orders accepted:"
              fieldName="starChangeOrdersAccepted"
              handleChange={this.handleChange}
            />
            <StarRating
              title="Your time was respected:"
              fieldName="starTimeRespected"
              handleChange={this.handleChange}
            />
            <StarRating
              title="Job completed without customer interference:"
              fieldName="starJobCompleted"
              handleChange={this.handleChange}
            />
            <StarRating
              title="Payment were made to your satisfaction:"
              fieldName="startPaymentSaticfaction"
              handleChange={this.handleChange}
            />
            <StarRating
              title="Would work with again"
              fieldName="starWorkWithAgain"
              handleChange={this.handleChange}
            />
            <SelectButton
              title="Did home owner buy material?"
              fieldName="boughtMaterial"
              handleChange={this.handleChange}
            />
            <SelectButton
              title="Designer or architect involved"
              fieldName="otherPartyInvolved"
              handleChange={this.handleChange}
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
                  onChangeText={text => this.handleChange('dollarsLost', text)}
                  value={dollarsLost}
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
                  style={styles.textInputComment}
                  onChangeText={text => this.handleChange('comments', text)}
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
        )}
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview)
