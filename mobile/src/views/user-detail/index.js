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
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import PlaceSearch from '../place-search'

import { TextIconInputField, CircleRadioButtonForm } from '../shared/redux-form'

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
  // Get place_id and formattedAddress
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

  handleProceed = () => {
    const {
      firstName,
      lastName,
      trade,
      jobPosition,
      placeId,
      name,
      unitId,
      contactable,
    } = this.props.userData

    const { geoCode } = this.props.places || {}
    const { state, formattedAddress, coordinate } = geoCode || {}
    const { lat, lng } = coordinate || {}
    const user = {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
    }

    const place = {
      formattedAddress,
      googleId: placeId,
      name,
      category: 1,
      lat,
      lng,
      unitId,
      state,
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
      unitId,
      trade,
      vicinity,
      contactable,
      jobPosition,
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
        <Modal animationType="slide">
          <PlaceSearch
            toggleSearchFn={toggleSearchFn}
            updateFieldFn={updateFieldFn}
            subscription
          />
        </Modal>
      )
    }
    return (
      <Modal animationType="slide" visible={this.props.modals.userDetail}>
        <KeyboardAwareScrollView style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 20,
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
                <Field
                  component={TextIconInputField}
                  icon="user"
                  placeholder="First Name"
                  name="firstName"
                  fieldName="firstName"
                  handleChange={updateFieldFn}
                  content={firstName}
                />
                <Field
                  component={TextIconInputField}
                  icon="user"
                  placeholder="Last Name"
                  name="lastName"
                  fieldName="lastName"
                  handleChange={updateFieldFn}
                  content={lastName}
                />
                <SelectItem
                  toggleFn={this.props.toggleFn}
                  icon="suitcase"
                  rightIcon={images.triangleIcon}
                  placeholder="Trade"
                  fieldName="trade"
                  value={trade.name}
                />
                <SelectItem
                  toggleFn={this.props.toggleSearchFn}
                  icon="map-marker"
                  placeholder="Company Address"
                  name="placeId"
                  value={vicinity}
                />
                <Field
                  component={TextIconInputField}
                  icon="building-o"
                  placeholder="Apt / Unit #"
                  name="unitId"
                  fieldName="unitId"
                  handleChange={updateFieldFn}
                  content={unitId}
                />
                <Field
                  component={TextIconInputField}
                  icon="building-o"
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
                  <Field
                    isSelected={jobPosition === 1}
                    size={15}
                    title="Business Owner"
                    content={1}
                    name="jobPosition"
                    component={CircleRadioButtonForm}
                    onSelected={() => this.handleCircleChange(1)}
                    width="60%"
                  />
                  <Field
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
                  marginBottom: 80,
                }}
              >
                {loading ? (
                  <ActivityIndicator size="large" color="#4369B0" />
                ) : (
                  <TouchableOpacity
                    disabled={
                      !firstName ||
                      !lastName ||
                      !name ||
                      !unitId ||
                      !trade ||
                      !vicinity ||
                      !jobPosition
                    }
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
                      Proceed
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </Modal>
    )
  }
}

const UserDetailForm = reduxForm({ form: 'userdetail' })(UserDetail)

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailForm)
