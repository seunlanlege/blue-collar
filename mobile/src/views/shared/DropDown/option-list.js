import React from 'react'
import { View } from 'react-native'

import Overlay from './overlay'
import Items from './items'

class OptionList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      width: 0,
      height: 0,
      pageX: 0,
      pageY: 0,
      positionX: 0,
      positionY: 0,
      items: [],
      onSelect: () => {},
    }
  }

  /* eslint-disable */
  show(items, positionX, positionY, width, height, onSelect) {
    positionX -= this.state.pageX
    positionY -= this.state.pageY
    /* eslint-enable */

    this.setState({
      ...this.state,
      positionX,
      positionY,
      width,
      height,
      items,
      onSelect,
      show: true,
    })
  }

  onOverlayPress = () => {
    const { onSelect } = this.state
    onSelect(null, null)

    this.setState({
      ...this.state,
      show: false,
    })
  }

  onItemPress = (item, value) => {
    const { onSelect } = this.state
    onSelect(item, value)

    this.setState({
      ...this.state,
      show: false,
    })
  }

  currentPosition(pageX, pageY) {
    this.setState({
      ...this.state,
      pageX,
      pageY,
    })
  }

  render() {
    const {
      items,
      pageX,
      pageY,
      positionX,
      positionY,
      width,
      height,
      show,
    } = this.state

    return (
      <View>
        <Overlay
          pageX={pageX}
          pageY={pageY}
          show={show}
          onPress={this.onOverlayPress}
        />
        <Items
          items={items}
          positionX={positionX}
          positionY={positionY}
          width={width}
          height={height}
          show={show}
          onPress={this.onItemPress}
        />
      </View>
    )
  }
}

export default OptionList
