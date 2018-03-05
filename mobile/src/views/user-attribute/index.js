import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import CustomTextInput from '../shared/text-input'
import CircleRadioButton from '../shared/circle-radio-button'
import SquareRadioButton from '../shared/square-radio-button'

import images from '../../../assets/images'
import styles from '../shared/styles'

class UserAttribute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      circleSelected: false,
      squareSelected: false,
    }
  }

  handleCircleChange = () =>
    this.setState({ circleSelected: !this.state.circleSelected })

  handleSquareChange = () =>
    this.setState({ squareSelected: !this.state.squareSelected })

  render() {
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
          <CustomTextInput icon={images.userIcon} placeholder="First Name" />
          <CustomTextInput icon={images.userIcon} placeholder="Last Name" />
          <CustomTextInput icon={images.tradeIcon} placeholder="Trade" />
          <CustomTextInput
            icon={images.locationIcon}
            placeholder="Business Address"
          />
          <CustomTextInput
            icon={images.companyIcon}
            placeholder="Company Name"
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
              isSelected={this.state.squareSelected}
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

export default UserAttribute
