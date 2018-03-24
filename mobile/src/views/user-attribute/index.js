import React from 'react'
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { Constants, Location, Permissions } from 'expo'

import CustomTextInput from '../shared/text-input'
import CircleRadioButton from '../shared/circle-radio-button'
import SquareRadioButton from '../shared/square-radio-button'

import { logInActions } from '../../redux/modules/login'
import { searchActions } from '../../redux/modules/search'

import images from '../../../assets/images'
import styles from '../shared/styles'

const mapStateToProps = state => state.userDataEntry

const mapDispatchToProps = dispatch => ({
  updateFieldFn: (field, value) =>
    dispatch(logInActions.updateField(field, value)),
  // @TODO Get device location see `place-search`
  searchPlaceFn: (lat, long, query) =>
    dispatch(searchActions.searchActions(lat, long, query)),
})

class UserAttribute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleSelected: false,
      lat: null,
      long: null,
    }
  }

  componentDidMount() {
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

  handleVenueChange = text => {
    const { lat, long } = this.state
    this.props.searchPlaceFn(lat, long, text)
  }

  handleChange = (field, value) => this.props.updateFieldFn(field, value)

  handleCircleChange = title => {
    this.props.updateFieldFn('jobPosition', title)
    this.setState({ circleSelected: !this.state.circleSelected })
  }

  handleSquareChange = contactable =>
    this.props.updateFieldFn('contactable', contactable)

  render() {
    const {
      firstName,
      lastName,
      trade,
      // placeId,
      name,
      contactable,
    } = this.props
    // console.log('THIS>PROps', placeId)
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.4,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={images.smallLogo} style={{ height: 80, width: 80 }} />
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            flex: 0.8,
            width: '80%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CustomTextInput
            handleChange={this.handleChange}
            icon={images.userIcon}
            placeholder="First Name"
            fieldName="firstName"
            value={firstName}
          />
          <CustomTextInput
            handleChange={this.handleChange}
            icon={images.userIcon}
            placeholder="Last Name"
            fieldName="lastName"
            value={lastName}
          />
          <CustomTextInput
            handleChange={this.handleChange}
            icon={images.tradeIcon}
            placeholder="Trade"
            fieldName="trade"
            trade={trade}
          />
          {/* Change this place id to vicinity from google, since only back end only need place id */}
          <CustomTextInput
            icon={images.locationIcon}
            handleChange={this.handleVenueChange}
            placeholder="Business Address"
            fieldName="placeId"
          />
          <CustomTextInput
            handleChange={this.handleChange}
            icon={images.companyIcon}
            placeholder="Company Name"
            fieldName="name"
            trade={name}
          />
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 0.2,
            width: '80%',
            justifyContent: 'space-around',
          }}
        >
          <View style={{ flex: 0.01, flexDirection: 'row' }}>
            <CircleRadioButton
              size={15}
              isSelected={this.state.circleSelected}
              title="Business Owner"
              handleChange={this.handleCircleChange}
              fontSize={11}
              width="50%"
            />
            <CircleRadioButton
              size={15}
              isSelected={!this.state.circleSelected}
              title="Employee"
              handleChange={this.handleCircleChange}
              fontSize={11}
              width="50%"
            />
          </View>
          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
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
              <Text style={{ fontSize: 11, color: '#CCCCCC', paddingLeft: 5 }}>
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
          <TouchableOpacity
            style={{
              flex: 1,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#4369B0',
              borderRadius: 5,
            }}
          >
            <Text style={{ color: '#4369B0', fontWeight: '500' }}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAttribute)
