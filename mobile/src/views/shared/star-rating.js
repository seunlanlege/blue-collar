import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import images from '../../../assets/images'

class StarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bidProcessIndex: 0,
      bidProcess: false,
    }
  }

  handleSelect = idx => {
    if (idx === 0) {
      this.setState({ bidProcess: !this.state.bidProcess })
    }
    this.setState({ bidProcessIndex: idx })
  }

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
      <View style={{ margin: 20, marginRight: 80 }}>
        <View>
          <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
            {this.props.title}
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
            <TouchableOpacity key={item} onPress={() => this.handleSelect(idx)}>
              {this.renderStar(idx)}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

export default StarRating
