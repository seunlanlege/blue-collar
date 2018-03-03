import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import CircleRadioButton from '../../shared/circle-radio-button'

import StarRating from '../../shared/star-rating'
import SelectButton from '../../shared/select-button'

const styles = StyleSheet.create({
  container: {
    top: 20,
    backgroundColor: '#FFFFFF',
  },
  cancelText: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#9B9B9B',
  },
  title: {
    fontSize: 23,
    color: '#2F669C',
    textAlign: 'center',
  },
  wrapperMargin: {
    marginLeft: 20,
    marginRight: 20,
  },
  address: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  addressWrapper: {
    marginTop: 10,
  },
  threeTextInput: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  apt: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 90,
  },
  state: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 80,
  },
  zip: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 90,
  },
  city: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  ownerName: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  circleButtonWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  rateTextWrapper: {
    marginTop: 20,
    marginLeft: 20,
  },
  rateText: {
    fontSize: 20,
    color: '#4A4A4A',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#979797',
  },
  estimated: {
    margin: 20,
    marginRight: 60,
  },
  estimatedTitle: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  estimatedText: {
    fontSize: 16,
    paddingLeft: 20,
    height: 58,
    width: '65%',
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  commentWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  commentText: {
    fontSize: 20,
    color: '#9B9B9B',
  },
  wordCountWrapper: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  wordCount: {
    color: '#E4E4E4',
    textAlign: 'right',
    paddingRight: 5,
    paddingTop: 5,
  },
  textInputComment: {
    height: 150,
    textAlign: 'left',
    paddingLeft: 10,
    borderColor: '#E4E4E4',
    fontSize: 16,
  },
  submitWrapper: {
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 60,
    marginRight: 60,
  },
  wrapperButton: {
    height: 45,
    borderRadius: 5,
    backgroundColor: '#2F669C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
})

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: false,
      manager: false,
      landlord: false,
      comment: '',
    }
  }

  handleSubmit = () => {
    // call action creator here later
  }

  handleChange = text => {
    this.setState({ comment: text })
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ marginTop: 10, marginBottom: 33, marginLeft: 10 }}>
          <Text style={styles.cancelText}>Cancel</Text>
        </View>
        <TouchableOpacity style={{ marginBottom: 26 }}>
          <Text style={styles.title}>Write a Review</Text>
        </TouchableOpacity>
        <View style={styles.wrapperMargin}>
          <TextInput placeholder="Street Address" style={styles.address} />
          <View style={styles.threeTextInput}>
            <TextInput placeholder="Apt #" style={styles.apt} />
            <TextInput placeholder="State" style={styles.state} />
            <TextInput placeholder="Zip" style={styles.zip} />
          </View>
          <View style={styles.addressWrapper}>
            <TextInput placeholder="City" style={styles.city} />
          </View>
          <View style={styles.addressWrapper}>
            <TextInput placeholder="Home Owner Name" style={styles.ownerName} />
          </View>
        </View>
        <View style={styles.circleButtonWrapper}>
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
          <View style={styles.addressWrapper}>
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
          <View style={styles.addressWrapper}>
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
        <View style={styles.rateTextWrapper}>
          <Text style={styles.rateText}>How would you rate these?</Text>
        </View>
        <StarRating title="Bid Process:" />
        <StarRating title="Scope of work understood / change orders accepted:" />
        <StarRating title="Your time was respected:" />
        <StarRating title="Job completed without customer interference:" />
        <StarRating title="Payment were made to your satisfaction:" />
        <StarRating title="Would work with again" />
        <SelectButton title="Did home owner buy material?" />
        <SelectButton title="Designer or architect involved" />
        <View style={styles.estimated}>
          <View>
            <Text style={styles.estimatedTitle}>
              {'Estimated $ lost on project:'}
            </Text>
          </View>
          <View style={styles.addressWrapper}>
            <TextInput placeholder="$" style={styles.estimatedText} />
          </View>
        </View>

        <View style={styles.commentWrapper}>
          <View>
            <Text style={styles.commentText}>Comment:</Text>
          </View>
          <View style={styles.wordCountWrapper}>
            <Text style={styles.wordCount}>
              {this.state.comment.toString().length} / 140
            </Text>
            <TextInput
              placeholder="Your professional opinion matters..."
              multiline
              editable
              style={styles.textInputComment}
              onChange={text => this.handleChange(text)}
            />
          </View>
        </View>

        <View style={styles.submitWrapper}>
          <TouchableOpacity
            style={styles.wrapperButton}
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.submitText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default ReviewForm
