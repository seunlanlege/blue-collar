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

import StarRating from '../../shared/star-rating'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: false,
      manager: false,
      landlord: false,
      isActive: false,
      userInput: '',
      bidProcessIndex: 0,
      bidProcess: false,
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
    if (idx === 0) {
      this.setState({ bidProcess: !this.state.bidProcess })
    }
    this.setState({ bidProcessIndex: idx })
  }

  handleFocus = (trigger, value) => {
    if (trigger === 'onblur' && this.state.userInput === '') {
      this.setState({ isActive: value })
    }

    if (trigger === 'onfocus') {
      this.setState({ isActive: value })
    }
  }

  handleInputChange = text => this.setState({ userInput: text })

  renderStar = idx => {
    if (this.state.bidProcessIndex > 0) {
      return (
        <Image
          source={
            this.state.bidProcessIndex > 0 &&
            this.state.bidProcessIndex + 1 > idx
              ? images.starBlueIcon
              : images.starIcon
          }
          style={{ width: 33, height: 33 }}
        />
      )
    }
    if (idx === 0) {
      return (
        <Image
          source={this.state.bidProcess ? images.starBlueIcon : images.starIcon}
          style={{ width: 33, height: 33 }}
        />
      )
    }
    return (
      <Image
        source={
          this.state.bidProcessIndex > 0 && this.state.bidProcessIndex + 1 > idx
            ? images.starBlueIcon
            : images.starIcon
        }
        style={{ width: 33, height: 33 }}
      />
    )
  }

  render() {
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
          <View>
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
        <StarRating title="Bid Process:" />
        <StarRating title="Scope of work understood / change orders accepted:" />
        <StarRating title="Your time was respected" />
        <StarRating title="Job completed without customer interference" />
        <StarRating title="Payment were made to your satisfaction" />
        <StarRating title="Did home owner buy material?" />
        <StarRating title="Would work with again" />

        <View style={{ margin: 20, marginRight: 60 }}>
          <View>
            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
              {'Did home owner buy material?'}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <Image source={images.yesNoIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ margin: 20, marginRight: 60 }}>
          <View>
            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
              {'Designer or architect involved'}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <Image source={images.yesNoIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ margin: 20, marginRight: 60 }}>
          <View>
            <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
              {'Estimated $ lost on project:'}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TextInput
              placeholder="$"
              style={{
                fontSize: 16,
                paddingLeft: 20,
                height: 58,
                width: '65%',
                borderWidth: 1,
                borderColor: '#E4E4E4',
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
          <View>
            <Text style={{ fontSize: 20, color: '#9B9B9B' }}>Comment:</Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TextInput
              multiline
              editable
              style={{
                height: 150,
                textAlign: this.state.isActive ? 'left' : 'right',
                paddingRight: 10,
                borderWidth: 1,
                borderColor: '#E4E4E4',
              }}
              onChange={text => this.handleInputChange(text)}
              onFocus={() => this.handleFocus('onfocus', true)}
              onBlur={() => this.handleFocus('onblur', false)}
            >
              <Text style={{ color: '#9B9B9B' }}>
                {this.state.isActive ? null : '0/140'}
              </Text>
              <Text style={{ color: '#9B9B9B' }}>
                {this.state.isActive ? null : '\n'}
              </Text>
              <Text
                style={{
                  color: '#9B9B9B',
                }}
              >
                {this.state.isActive
                  ? null
                  : 'Your professional opinion matters...'}
              </Text>{' '}
            </TextInput>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            marginBottom: 50,
            marginLeft: 60,
            marginRight: 60,
          }}
        >
          <TouchableOpacity
            style={{
              height: 45,
              borderRadius: 5,
              backgroundColor: '#2F669C',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontSize: 20,
              }}
            >
              Submit Review
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default ReviewForm
