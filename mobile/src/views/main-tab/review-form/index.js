import React from 'react'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import CircleRadioButton from '../../shared/circle-radio-button'
import images from '../../../../assets/images'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: false,
      manager: false,
      landlord: false,
      bidProcess: 0,
    }
  }

  handleCircleChange = (field, value) => {
    if (field === 'owner') {
      this.setState({ [field]: value, manager: false, landlord: false })
    }

    if (field === 'manager') {
      this.setState({ [field]: value, owner: false, landlord: false })
    }

    if (field === 'landlord') {
      this.setState({ [field]: value, owner: false, manager: false })
    }
  }

  handleSelect = idx => {
    this.setState({ bidProcess: idx })
  }

  render() {
    console.log('bid process', this.state.bidProcess)
    return (
      <ScrollView
        style={{
          top: 20,
          backgroundColor: '#FFFFFF',
        }}
      >
        <View style={{ marginTop: 10, marginBottom: 33, marginLeft: 10 }}>
          <Text
            style={{
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#3d6587',
              color: '#9B9B9B',
            }}
          >
            Cancel
          </Text>
        </View>
        <TouchableOpacity style={{ marginBottom: 26 }}>
          <Text style={{ fontSize: 23, color: '#2F669C', textAlign: 'center' }}>
            Write a Review
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <TextInput
            placeholder="Street Address"
            style={{
              paddingLeft: 10,
              height: 35,
              borderWidth: 1,
              borderColor: '#DBDBDB',
            }}
          />
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextInput
              placeholder="Apt #"
              style={{
                paddingLeft: 10,
                height: 35,
                borderWidth: 1,
                borderColor: '#DBDBDB',
                width: 90,
              }}
            />
            <TextInput
              placeholder="State"
              style={{
                paddingLeft: 10,
                height: 35,
                borderWidth: 1,
                borderColor: '#DBDBDB',
                width: 80,
              }}
            />
            <TextInput
              placeholder="Zip"
              style={{
                paddingLeft: 10,
                height: 35,
                borderWidth: 1,
                borderColor: '#DBDBDB',
                width: 90,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <TextInput
              placeholder="City"
              style={{
                paddingLeft: 10,
                height: 35,
                borderWidth: 1,
                borderColor: '#DBDBDB',
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <TextInput
              placeholder="Home Owner Name"
              style={{
                paddingLeft: 10,
                height: 35,
                borderWidth: 1,
                borderColor: '#DBDBDB',
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <View style={{}}>
            <CircleRadioButton
              isSelected={this.state.owner}
              size={15}
              title="Home Owner"
              fontSize={20}
              handleChange={() =>
                this.handleCircleChange('owner', !this.state.owner)
              }
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <CircleRadioButton
              isSelected={this.state.manager}
              size={15}
              title="Property Manager"
              fontSize={20}
              handleChange={() =>
                this.handleCircleChange('manager', !this.state.manager)
              }
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <CircleRadioButton
              isSelected={this.state.landlord}
              size={15}
              title="Landlord"
              fontSize={20}
              handleChange={() =>
                this.handleCircleChange('landlord', !this.state.landlord)
              }
            />
          </View>
        </View>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 20,
              color: '#4A4A4A',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#979797',
            }}
          >
            How would you rate these?
          </Text>
        </View>
        <View style={{ margin: 20, marginRight: 80 }}>
          <View>
            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>Bid Process:</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <TouchableOpacity
                key={item}
                onPress={() => this.handleSelect(idx)}
              >
                <Image
                  source={
                    this.state.bidProcess > 0 && this.state.bidProcess + 1 > idx
                      ? images.starBlueIcon
                      : images.starIcon
                  }
                  style={{ width: 33, height: 33 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ margin: 20, marginRight: 80 }}>
          <View>
            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
              {'Scope of work understood / change orders accepted:'}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <TouchableOpacity
                key={item}
                onPress={() => this.handleSelect(idx)}
              >
                <Image
                  source={
                    this.state.selectedStar === 0 &&
                    this.state.selectedStar + 1 > idx
                      ? images.starBlueIcon
                      : images.starIcon
                  }
                  style={{ width: 33, height: 33 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ margin: 20, marginRight: 80 }}>
          <View>
            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
              {'Your time was respected'}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <TouchableOpacity
                key={item}
                onPress={() => this.handleSelect(idx)}
              >
                <Image
                  source={
                    this.state.selectedStar > 0 &&
                    this.state.selectedStar + 1 > idx
                      ? images.starBlueIcon
                      : images.starIcon
                  }
                  style={{ width: 33, height: 33 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default ReviewForm
