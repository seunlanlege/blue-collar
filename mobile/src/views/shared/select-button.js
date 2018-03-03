import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SelectButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  handleSelect = () => this.setState({ isActive: !this.state.isActive })

  render() {
    return (
      <View style={{ margin: 20, marginRight: 60 }}>
        <View>
          <Text style={{ fontSize: 16, color: '#9B9B9B' }}>
            {this.props.title}
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => this.handleSelect()}
            style={[
              {
                height: 55,
                borderWidth: 1,
                width: '36%',
                borderColor: '#9B9B9B',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              },
              this.state.isActive ? { backgroundColor: '#2F669C' } : {},
            ]}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={[
                  { color: '#9B9B9B', fontSize: 20 },
                  this.state.isActive ? { color: '#FFFFFF' } : {},
                ]}
              >
                Yes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleSelect()}
            style={[
              {
                height: 55,
                borderWidth: 1,
                borderLeftWidth: 0,
                width: '36%',
                borderColor: '#9B9B9B',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              },
              this.state.isActive ? {} : { backgroundColor: '#2F669C' },
            ]}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={[
                  { color: '#9B9B9B', fontSize: 20 },
                  this.state.isActive ? {} : { color: '#FFFFFF' },
                ]}
              >
                No
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default SelectButton
