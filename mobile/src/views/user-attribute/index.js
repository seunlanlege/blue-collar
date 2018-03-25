import React from 'react'
import {
  Alert,
  Image,
  FlatList,
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
import DropDown from '../shared/drop-drown/drop-down'

import BusinessAddress from '../shared/business-address'

import { logInActions } from '../../redux/modules/login'
import { searchActions } from '../../redux/modules/search'
import { dataEntryActions } from '../../redux/modules/user-data-entry'

import images from '../../../assets/images'
import styles from '../shared/styles'

const mapStateToProps = state =>
  Object.assign({}, state.userDataEntry, state.search)

const mapDispatchToProps = dispatch => ({
  updateFieldFn: (field, value) =>
    dispatch(logInActions.updateField(field, value)),
  // Get place_id and vicinity
  searchPlaceFn: (lat, long, query) =>
    dispatch(searchActions.request(lat, long, query)),
  requestProceedFn: () => dispatch(dataEntryActions.request()),
})

class UserAttribute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleSelected: false,
      lat: null,
      long: null,
      companyName: '',
      isTradeActive: '',
      isActiveSearch: false,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.results && nextProps.results.length > 0) {
      this.setState({ isActiveSearch: true })
    }
    if (nextProps.placeId !== '') {
      this.setState({ isActiveSearch: false })
    }
    if (nextProps.companyId) {
      this.props.navigation.navigate({ routeName: 'paymentDetail' })
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
    this.setState({ companyName: value })
    this.props.searchPlaceFn(lat, long, value)
  }

  handleCompanyName = (companyName, placeId) => {
    this.setState({ companyName, isActiveSearch: false })
    this.handleChange('placeId', placeId)
    this.handleChange('vicinity', companyName)
  }

  handleChange = (field, value) => this.props.updateFieldFn(field, value)

  handleCircleChange = title => {
    this.props.updateFieldFn('jobPosition', title)
    this.setState({ circleSelected: !this.state.circleSelected })
  }

  handleSquareChange = contactable =>
    this.props.updateFieldFn('contactable', contactable)

  // send the request to api
  handleProceed = () => this.props.requestProceedFn()

  keyExtractor = (item, index) => item.id

  render() {
    const { firstName, lastName, trade, contactable, results } = this.props
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
        {this.state.isActiveSearch ? (
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
              handleChange={this.handleCompanyChange}
              icon={images.locationIcon}
              placeholder="Business Address"
              fieldName="placeId"
              isTradeActive={this.state.isTradeActive}
              value={this.state.companyName}
              onBlur={() => this.setState({ isActiveSearch: false })}
            />
            {results && results.length > 0 ? (
              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  width: '100%',
                  backgroundColor: '#AAA',
                  borderWidth: 1,
                }}
              >
                <FlatList
                  data={results}
                  renderItem={({ item, index }) => (
                    <BusinessAddress
                      data={item}
                      index={index}
                      navigation={this.props.navigation}
                      handleChange={this.handleCompanyName}
                    />
                  )}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            ) : null}
          </KeyboardAvoidingView>
        ) : (
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
              onBlur={() => {}}
            />
            <CustomTextInput
              handleChange={this.handleChange}
              icon={images.userIcon}
              placeholder="Last Name"
              fieldName="lastName"
              value={lastName}
              onBlur={() => {}}
            />
            <DropDown
              handleChange={this.handleChange}
              icon={images.tradeIcon}
              rightIcon={images.triangleIcon}
              placeholder="Trade"
              fieldName="trade"
              trade={trade}
              onActive={() =>
                this.setState({ isTradeActive: !this.state.isTradeActive })
              }
            />
            {/* Change this place id to vicinity from google, since only back end only need place id */}
            <CustomTextInput
              handleChange={this.handleCompanyChange}
              icon={images.locationIcon}
              placeholder="Business Address"
              fieldName="placeId"
              isTradeActive={this.state.isTradeActive}
              value={this.state.companyName}
              onBlur={() => {}}
            />
            <CustomTextInput
              handleChange={this.handleChange}
              icon={images.companyIcon}
              placeholder="Company Name"
              fieldName="name"
              isTradeActive={this.state.isTradeActive}
              isActiveSearch={this.state.isActiveSearch}
              onBlur={() => {}}
            />
          </KeyboardAvoidingView>
        )}

        <View
          style={[
            {
              flex: 0.2,
              width: '80%',
              justifyContent: 'space-around',
            },
            this.state.isActiveSearch ? { flex: 0 } : {},
          ]}
        >
          {this.state.isActiveSearch ? null : (
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
          )}
          {this.state.isActiveSearch ? null : (
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
                <Text
                  style={{ fontSize: 11, color: '#CCCCCC', paddingLeft: 5 }}
                >
                  Ok for other contractors to contact me
                </Text>
              </View>
            </View>
          )}
        </View>
        {this.state.isActiveSearch ? (
          <View style={{ flex: 0.5 }} />
        ) : (
          <View
            style={{
              flex: 0.25,
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={this.handleProceed}
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
              <Text style={{ color: '#4369B0', fontWeight: '500' }}>
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAttribute)
