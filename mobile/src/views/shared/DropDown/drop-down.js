import React from 'react'
import { Image, View } from 'react-native'

import Select from './select'
import Option from './options'
import OptionList from './option-list'
import updatePosition from './update-option'

import styles from '../styles'

class DropDown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: '',
    }
  }

  componentDidMount() {
    updatePosition(this.SELECT1)
    updatePosition(this.OPTIONLIST)
  }

  getOptionList = () => this.OPTIONLIST

  choice = trade => {
    this.setState({
      ...this.state,
      selected: trade,
    })
    this.props.handleChange(trade)
    this.props.onActive()
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={[styles.textInputIcon, { borderRightWidth: 0 }]}>
          <Image source={this.props.icon} style={{ width: 20, height: 20 }} />
        </View>
        <Select
          width={215}
          ref={el => {
            this.SELECT1 = el
          }}
          optionListRef={this.getOptionList}
          defaultValue="Trade"
          styleText={{ color: '#ccc' }}
          onSelect={this.choice}
          onActive={this.props.onActive}
        >
          <Option>Carpenter</Option>
          <Option>Cleanouts Demolition</Option>
          <Option>Electrician</Option>
          <Option>General Contractor</Option>
          <Option>Gutter</Option>
          <Option>Fence</Option>
          <Option>Framer</Option>
          <Option>Flooring Tile</Option>
          <Option>Hvac</Option>
          <Option>Landscaping</Option>
          <Option>Mason</Option>
          <Option>Movers</Option>
          <Option>Plasterer or Drywall</Option>
          <Option>Plumber</Option>
          <Option>Painter</Option>
          <Option>Roofer</Option>
          <Option>Tree_services</Option>
          <Option>Other</Option>
        </Select>

        <View
          style={{
            flex: 1,
            bottom: 8,
            right: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={this.props.rightIcon} />
        </View>

        <OptionList
          ref={el => {
            this.OPTIONLIST = el
          }}
          onActive={this.props.onActive}
        />
      </View>
    )
  }
}

export default DropDown
