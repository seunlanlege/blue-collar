// @flow
import React, { Component } from 'react'
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native'
import { observer } from 'mobx-react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import {
  TextIconInputField,
  CircleRadioButtonForm,
} from '../../views/shared/redux-form'
import { PlaceSearchUI } from '../../components'

import SquareRadioButton from '../../views/shared/square-radio-button'
import DropDown from '../../views/shared/drop-down'

import SelectItem from '../../views/shared/select-item'
import images from '../../../assets/images'
import styles from '../../views/shared/styles'
import { ComingSoon } from './comingsoon'
import { Subscription } from './subscription'
import { UserDetail } from './store'
import { AppStore } from '../store'

@observer
export class UserDetailUI extends Component<{ navigation: * }> {
  store = new UserDetail()

  render() {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        enableOnAndroid
        style={[styles.keyboardWrapper, { flex: 1, paddingTop: 20 }]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 10,
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
                {...{
                  icon: 'user',
                  placeholder: 'First Name',
                  name: 'firstName',
                  fieldName: 'firstName',
                  onChange: (...args) => this.store.setField(...args),
                  content: this.store.fields.firstName,
                }}
              />
              <TextIconInputField
                {...{
                  icon: 'user',
                  placeholder: 'Last Name',
                  name: 'lastName',
                  fieldName: 'lastName',
                  onChange: (...args) => this.store.setField(...args),
                  content: this.store.fields.lastName,
                }}
              />
              <SelectItem
                toggleFn={() => this.store.toggleModals('trade', true)}
                icon="suitcase"
                rightIcon={images.triangleIcon}
                placeholder="Trade"
                fieldName="trade"
                value={this.store.fields.trade.name}
              />
              <SelectItem
                toggleFn={() => PlaceSearchUI.show()}
                icon="map-marker"
                placeholder="Company Address"
                name="placeId"
                value={this.store.place.formattedAddress}
              />
              <TextIconInputField
                {...{
                  icon: 'building-o',
                  placeholder: 'Apt / Unit #',
                  name: 'unitId',
                  fieldName: 'unitId',
                  onChange: (...args) => this.store.setField(...args),
                  content: this.store.fields.unitId,
                }}
              />
              <TextIconInputField
                {...{
                  icon: 'building-o',
                  placeholder: 'Company Name',
                  name: 'name',
                  fieldName: 'name',
                  onChange: (...args) => this.store.setField(...args),
                  content: this.store.fields.name,
                }}
              />
            </View>

            <View style={{ width: '80%', justifyContent: 'space-around' }}>
              <View
                style={{ flex: 0.01, flexDirection: 'row', marginBottom: 20 }}
              >
                <CircleRadioButtonForm
                  isSelected={this.store.fields.jobPosition === 1}
                  size={15}
                  input={{
                    onChange: () => this.store.setField('jobPosition', 1),
                  }}
                  title="Business Owner"
                  name="jobPosition"
                  width="60%"
                />
                <CircleRadioButtonForm
                  isSelected={this.store.fields.jobPosition === 2}
                  input={{
                    onChange: () => this.store.setField('jobPosition', 2),
                  }}
                  size={15}
                  title="Employee"
                  name="jobPosition"
                  width="40%"
                />
              </View>

              <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                <SquareRadioButton
                  size={15}
                  isSelected={this.store.fields.contactable}
                  handleChange={contactable =>
                    this.store.setField('contactable', contactable)
                  }
                />
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
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
              {this.store.loading ? (
                <ActivityIndicator size="large" color="#4369B0" />
              ) : (
                <TouchableOpacity
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
                  onPress={() => this.store.update()}
                  disabled={!this.store.isValid}
                >
                  <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
                    Proceed
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
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
          <PlaceSearchUI onDone={this.store.getPlace} />
        </SafeAreaView>

        <ComingSoon
          visible={
            AppStore.targetedAd === 'coming-soon' && this.store.modals.nextStep
          }
          close={() => AppStore.auth.setIsAuth(true)}
        />
        <Subscription
          visible={
            AppStore.targetedAd === 'subscription' && this.store.modals.nextStep
          }
          close={() => AppStore.auth.setIsAuth(true)}
        />
      </KeyboardAwareScrollView>
    )
  }
}
