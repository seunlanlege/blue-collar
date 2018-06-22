import React from 'react'
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { observer } from 'mobx-react'

import { PlaceSearchUI } from '../../../components/placesmodal'

import { TextIconInput } from '../../../views/shared/form'
import CircleRadioButton from '../../../views/shared/circle-radio-button'
import SquareRadioButton from '../../../views/shared/square-radio-button'
import DropDown from '../../../views/shared/drop-down'

import SelectItem from '../../../views/shared/select-item'

import { actions as placeActions } from '../../../redux/modules/places'
import { actions as userActions } from '../../../redux/modules/users'
import { actions as modalActions } from '../../../redux/modules/modals'

import images from '../../../../assets/images'
import styles from '../../../views/shared/styles'
import { AppStore } from '../../store'
import { EditProfileStore } from './store'
import { getStateCode } from '../../../redux/effects/google-places'

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

@observer
export class EditProfile extends React.Component {
  store = new EditProfileStore()
  state = {
    loading: false,
  }

  getPlace = place => {
    getStateCode(place.placeId).then(p =>
      this.store.setField('place', {
        ...place,
        ...p,
        formatted_address: p.formattedAddress,
      }),
    )
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

    const user = {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
    }

    const { formatted_address: formattedAddress, state, coordinate } = userPlace
    const { name } = userPlace
    const googleId = userPlace.placeId ? userPlace.placeId : userPlace.google_id

    const place = {
      formattedAddress,
      googleId,
      name,
      category: 1,
      lat: (coordinate && coordinate.lat) || userPlace.latitude,
      lng: (coordinate && coordinate.lng) || userPlace.longitude,
      state,
    }

    this.setState({ loading: false })
    AppStore.auth
      .updateUserViaApi({ userForm: { user, place } })
      .then(() => this.setState({ loading: false }))
  }

  keyExtractor = (item, index) => item.id

  render() {
    const {
      firstName,
      lastName,
      trade,
      place,
      contactable,
      jobPosition,
    } = AppStore.auth.user
    const { formatted_address: formattedAddress, name } = place
    // console.log('place :', place)

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
                <TextIconInput
                  handleChange={this.store.setField}
                  icon="user"
                  placeholder="First Name"
                  name="firstName"
                  fieldName="firstName"
                  value={firstName}
                />
                <TextIconInput
                  handleChange={this.store.setField}
                  icon="user"
                  placeholder="Last Name"
                  name="lastName"
                  fieldName="lastName"
                  value={lastName}
                />
                <SelectItem
                  toggleFn={() => this.store.toggleModals('trade', true)}
                  icon="suitcase"
                  rightIcon={images.triangleIcon}
                  placeholder="Trade"
                  fieldName="trade"
                  value={trade.name || trade}
                />
                <SelectItem
                  toggleFn={() => PlaceSearchUI.show()}
                  icon="map-marker"
                  placeholder="Company Address"
                  name="placeId"
                  value={formattedAddress.split(',').slice(0, 2)}
                />
                <TextIconInput
                  icon="building-o"
                  placeholder="Company Name"
                  name="name"
                  fieldName="name"
                  handleChange={(_, value) =>
                    this.store.setField('place.name', value)
                  }
                  value={name}
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
                    isSelected={jobPosition === 1}
                    size={15}
                    title="Business Owner"
                    content={1}
                    name="jobPosition"
                    onSelected={() => this.store.setField('jobPosition', 1)}
                    width="60%"
                  />
                  <CircleRadioButton
                    isSelected={jobPosition === 2}
                    size={15}
                    title="Employee"
                    content={1}
                    name="jobPosition"
                    onSelected={() => this.store.setField('jobPosition', 2)}
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
                    handleChange={status =>
                      this.store.setField('contactable', status)
                    }
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
                {this.state.loading ? (
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
        <PlaceSearchUI onDone={this.getPlace} />
        <DropDown
          visible={this.store.modals.trade}
          toggleFn={() => this.store.toggleModals('trade', false)}
          icon={images.tradeIcon}
          rightIcon={images.triangleIcon}
          placeholder="Trade"
          fieldName="trade"
          trade={this.store.fields.trade}
          handleSelect={(_, item) => {
            this.store.setField('trade', item)
            this.store.toggleModals('trade', false)
          }}
        />
      </KeyboardAwareScrollView>
    )
  }
}
