import React from 'react'
import {
  ActivityIndicator,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { PlaceSearchUI } from '../../../components/placesmodal'

import {
  TextIconInputField,
  CircleRadioButtonForm,
} from '../../../views/shared/redux-form'

import SquareRadioButton from '../../../views/shared/square-radio-button'
import DropDown from '../../../views/shared/drop-down'

import SelectItem from '../../../views/shared/select-item'

import { actions as placeActions } from '../../../redux/modules/places'
import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'

import images from '../../../../assets/images'
import styles from '../../../views/shared/styles'
import { AppStore } from '../../store'

const mapStateToProps = state => ({
  modals: state.modals,
  places: state.places,
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  // Get place_id and formattedAddress
  searchPlaceFn: (lat, long, query) =>
    dispatch(placeActions.search(lat, long, query)),
  updateUserFn: payload => dispatch(userActions.update(payload)),
  updateFieldFn: (field, value) =>
    dispatch(userActions.updateField(field, value)),
  toggleFn: status => dispatch(modalActions.toggle('trade', status)),
  toggleSearchFn: status => dispatch(modalActions.toggle('search', status)),
})

export class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleSelected: false,
      name: null,
      vicinity: null,
      placeId: null,
    }
  }

  handleCompanyChange = (field, value) => {
    const { lat, long } = this.props.places
    this.props.searchPlaceFn(lat, long, value)
  }

  handleCircleChange = title => {
    this.props.updateFieldFn('jobPosition', title)
    this.setState({ circleSelected: !this.state.circleSelected })
  }

  handleSquareChange = contactable =>
    this.props.updateFieldFn('contactable', contactable)

  handleSelectTrade = (field, value) => {
    this.props.updateFieldFn(field, value)
    this.props.toggleFn(false)
  }

  updateUserPlace = (field, value) => {
    this.setState({ [field]: value })
  }

  handleProceed = () => {
    const {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
      place: userPlace,
    } = AppStore.auth.user

    const { geoCode } = this.props.places

    const user = {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
    }

    let formattedAddress
    let state
    let lat
    let lng
    /* eslint-disable */
    if (
      geoCode &&
      geoCode.formattedAddress &&
      this.state.vicinity ===
        geoCode.formattedAddress
          .split(',')
          .slice(0, 2)
          .join()
    ) {
      formattedAddress = geoCode.formattedAddress
      state = geoCode.state
      lat = this.props.places.lat
      lng = this.props.places.long
    } else {
      formattedAddress = userPlace.formatted_address
      state = userPlace.state
      lat = userPlace.latitude
      lng = userPlace.longitude
    }
    /* eslint-enable */

    const name = this.state.name ? this.state.name : userPlace.name
    const googleId = this.state.placeId
      ? this.state.placeId
      : userPlace.google_id

    const place = {
      formattedAddress,
      googleId,
      name,
      category: 1,
      lat,
      lng,
      state,
    }

    this.props.updateUserFn({ userForm: { user, place } })
  }

  keyExtractor = (item, index) => item.id

  render() {
    const { updateFieldFn } = this.props
    const {
      firstName,
      lastName,
      trade,
      place: { formatted_address: formattedAddress, name },
      contactable,
      jobPosition,
      loading,
    } = AppStore.auth.user

    if (this.props.modals.trade) {
      return (
        <DropDown
          toggleFn={this.props.toggleFn}
          icon={images.tradeIcon}
          rightIcon={images.triangleIcon}
          placeholder="Trade"
          fieldName="trade"
          trade={trade}
          handleSelect={this.handleSelectTrade}
        />
      )
    }

    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: '100%',
                  paddingTop: 5,
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
                    style={{ height: 10, width: 10 }}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#3d6587',
                      color: '#4B7295',
                    }}
                  >
                    Back
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginBottom: 20,
                }}
              >
                <Image
                  source={images.smallLogo}
                  style={{ height: 100, width: 100 }}
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  marginTop: 20,
                  width: '80%',
                  justifyContent: 'space-between',
                }}
              >
                <TextIconInputField
                  icon="user"
                  placeholder="First Name"
                  name="firstName"
                  fieldName="firstName"
                  content={firstName}
                />
                <TextIconInputField
                  icon="user"
                  placeholder="Last Name"
                  name="lastName"
                  fieldName="lastName"
                  content={lastName}
                />
                <SelectItem
                  toggleFn={this.props.toggleFn}
                  icon="suitcase"
                  rightIcon={images.triangleIcon}
                  placeholder="Trade"
                  fieldName="trade"
                  value={trade.name || trade}
                />
                <SelectItem
                  toggleFn={this.props.toggleSearchFn}
                  icon="map-marker"
                  placeholder="Company Address"
                  name="placeId"
                  value={
                    this.state.vicinity
                      ? this.state.vicinity.split(',').slice(0, 2)
                      : formattedAddress.split(',').slice(0, 2)
                  }
                />
                <TextIconInputField
                  icon="building-o"
                  placeholder="Company Name"
                  name="name"
                  fieldName="name"
                  handleChange={this.updateUserPlace}
                  content={this.state.name !== null ? this.state.name : name}
                />
              </View>

              <View
                style={{
                  width: '80%',
                  justifyContent: 'space-around',
                }}
              >
                <View
                  style={{ flex: 0.01, flexDirection: 'row', marginBottom: 20 }}
                >
                  <CircleRadioButtonForm
                    isSelected={jobPosition === 1}
                    size={15}
                    title="Business Owner"
                    content={1}
                    name="jobPosition"
                    component={CircleRadioButtonForm}
                    onSelected={() => this.handleCircleChange(1)}
                    width="60%"
                  />
                  <CircleRadioButtonForm
                    isSelected={jobPosition === 2}
                    size={15}
                    title="Employee"
                    content={1}
                    name="jobPosition"
                    component={CircleRadioButtonForm}
                    onSelected={() => this.handleCircleChange(2)}
                    width="40%"
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 40,
                  }}
                >
                  <SquareRadioButton
                    size={15}
                    isSelected={contactable}
                    handleChange={this.handleSquareChange}
                  />
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{ fontSize: 11, color: '#CCCCCC', paddingLeft: 5 }}
                    >
                      Ok for other contractors to contact me
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 0.25,
                  width: '80%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 80,
                }}
              >
                {loading ? (
                  <ActivityIndicator size="large" color="#4369B0" />
                ) : (
                  <TouchableOpacity
                    onPress={this.handleProceed}
                    style={{
                      flex: 1,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#2F669C',
                      borderWidth: 1,
                      borderColor: '#2F669C',
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
                      Save
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </SafeAreaView>
        </View>
        <PlaceSearchUI />
      </KeyboardAwareScrollView>
    )
  }
}
