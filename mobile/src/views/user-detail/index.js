import React from 'react'
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Constants, Location, Permissions } from 'expo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { TextIconInputField } from '../shared/redux-form'
import PlaceSearch from '../place-search'

import CircleRadioButton from '../shared/circle-radio-button'
import SquareRadioButton from '../shared/square-radio-button'
import DropDown from '../shared/drop-down'

import SelectItem from '../shared/select-item'

import { actions as placeActions } from '../../redux/modules/places'
import { actions as dataEntryActions } from '../../redux/modules/user-data-entry'
import { actions as modalActions } from '../../redux/modules/modals'

import images from '../../../assets/images'
import styles from '../shared/styles'

const mapStateToProps = state => ({
  userData: state.userDataEntry,
  places: state.places,
  modals: state.modals,
})

const mapDispatchToProps = dispatch => ({
  // Get place_id and vicinity
  searchPlaceFn: (lat, long, query) =>
    dispatch(placeActions.search(lat, long, query)),
  updateUserFn: payload => dispatch(dataEntryActions.update(payload)),
  updateFieldFn: (field, value) =>
    dispatch(dataEntryActions.updateField(field, value)),
  toggleFn: status => dispatch(modalActions.toggle('trade', status)),
  toggleSearchFn: status => dispatch(modalActions.toggle('search', status)),
})

class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleSelected: false,
      lat: null,
      long: null,
    }
  }

  componentDidMount() {
    // TODO: Move this logic into /effects/location
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      )
    } else {
      this.getLocationAsync()
    }
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

  handleCompanyChange = (field, value) => {
    const { lat, long } = this.state
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

  handleProceed = () => {
    const {
      firstName,
      lastName,
      trade,
      jobPosition,
      vicinity,
      placeId,
      name,
      contactable,
    } = this.props.userData

    const user = {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
    }

    const place = {
      vicinity,
      googleId: placeId,
      name,
      category: 1,
    }

    this.props.updateUserFn({ userForm: { user, place } })
  }

  keyExtractor = (item, index) => item.id

  render() {
    const {
      userData,
      // handleSubmit,

      toggleSearchFn,
      updateFieldFn,
    } = this.props
    const {
      firstName,
      lastName,
      name,
      trade,
      vicinity,
      contactable,
      loading,
    } = userData

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

    if (this.props.modals.search) {
      return (
        <PlaceSearch
          toggleSearchFn={toggleSearchFn}
          updateFieldFn={updateFieldFn}
        />
      )
    }
    return (
      <Modal visible={this.props.modals.userDetail}>
        <KeyboardAwareScrollView style={{ flex: 1, top: 20 }}>
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Image
                source={images.smallLogo}
                style={{ height: 100, width: 100 }}
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
              <Field
                component={TextIconInputField}
                icon={images.userIcon}
                placeholder="First Name"
                name="firstName"
                fieldName="firstName"
                handleChange={updateFieldFn}
                content={firstName}
              />
              <Field
                component={TextIconInputField}
                icon={images.userIcon}
                placeholder="Last Name"
                name="lastName"
                fieldName="lastName"
                handleChange={updateFieldFn}
                content={lastName}
              />
              <SelectItem
                toggleFn={this.props.toggleFn}
                icon={images.tradeIcon}
                rightIcon={images.triangleIcon}
                placeholder="Trade"
                fieldName="trade"
                value={trade.name}
              />
              <SelectItem
                toggleFn={this.props.toggleSearchFn}
                icon={images.locationIcon}
                placeholder="Company Address"
                name="placeId"
                value={vicinity.split(',')[0]}
              />
              <Field
                component={TextIconInputField}
                icon={images.companyIcon}
                placeholder="Company Name"
                name="name"
                fieldName="name"
                handleChange={updateFieldFn}
                content={name}
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
                <CircleRadioButton
                  size={15}
                  isSelected={this.state.circleSelected}
                  title="Business Owner"
                  value="1"
                  handleChange={this.handleCircleChange}
                  fontSize={11}
                  width="50%"
                />
                <CircleRadioButton
                  size={15}
                  isSelected={!this.state.circleSelected}
                  title="Employee"
                  value="2"
                  handleChange={this.handleCircleChange}
                  fontSize={11}
                  width="50%"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 30,
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
                    backgroundColor: '#4369B0',
                    borderWidth: 1,
                    borderColor: '#4369B0',
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
                    Proceed
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAwareScrollView>
      </Modal>
    )
  }
}

const UserDetailForm = reduxForm({ form: 'userdetail' })(UserDetail)

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailForm)
