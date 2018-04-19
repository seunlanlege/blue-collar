import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginRight: 80,
  },
  starWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  imageSize: {
    width: 33,
    height: 33,
  },
})

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
    this.props.handleChange(idx + 1)
  }

  renderStar = idx => {
    if (this.state.bidProcessIndex > 0) {
      return (
        <Image
          source={
            this.state.bidProcessIndex > 0 &&
            this.state.bidProcessIndex + 1 > idx
              ? images.starYellow
              : images.starIcon
          }
          style={styles.imageSize}
        />
      )
    }
    if (idx === 0) {
      return (
        <Image
          source={this.state.bidProcess ? images.starYellow : images.starIcon}
          style={styles.imageSize}
        />
      )
    }
    return (
      <Image
        source={
          this.state.bidProcessIndex > 0 && this.state.bidProcessIndex + 1 > idx
            ? images.starYellow
            : images.starIcon
        }
        style={styles.imageSize}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.starWrapper}>
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
