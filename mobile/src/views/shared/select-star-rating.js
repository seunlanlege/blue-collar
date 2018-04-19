import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'

import images from '../../../assets/images'

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  starWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  imageSize: {
    width: 25,
    height: 25,
  },
})

class SelectStarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bidProcessIndex: 0,
      bidProcess: false,
    }
  }

  componentWillMount() {
    if (this.props.count) {
      this.setState({ bidProcessIndex: this.props.count - 1 })
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
              ? images.starYellow
              : images.starIcon
          }
          style={styles.imageSize}
          resizeMode="contain"
        />
      )
    }
    if (idx === 0) {
      return (
        <Image
          source={this.state.bidProcess ? images.starYellow : images.starIcon}
          style={styles.imageSize}
          resizeMode="contain"
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
        resizeMode="contain"
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.starWrapper}>
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <TouchableOpacity
              disabled={this.props.disabled}
              style={styles.container}
              key={item}
              onPress={() => this.handleSelect(idx)}
            >
              {this.renderStar(idx)}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

export default SelectStarRating
