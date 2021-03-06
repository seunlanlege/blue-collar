import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginRight: 60,
  },
  title: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  buttonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    height: 55,
    borderWidth: 1,
    width: '36%',
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: '#9B9B9B',
    fontSize: 20,
  },
})

class SelectButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: null,
    }
  }

  componentWillMount() {
    if (this.props.selected || this.props.selected === false) {
      this.setState({ isActive: this.props.selected })
    }
  }

  handleSelect = value => {
    this.setState({ isActive: value })
    this.props.inputChange(value)
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { marginTop: this.props.marginTop || styles.container.marginTop },
        ]}
      >
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            disabled={this.props.disabled}
            onPress={() => this.handleSelect(true)}
            style={[
              styles.button,
              {
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              },
              this.state.isActive ? { backgroundColor: '#43C64E' } : {},
            ]}
          >
            <View style={styles.activeTextStyle}>
              <Text
                style={[
                  styles.innerText,
                  this.state.isActive ? { color: '#FFFFFF' } : {},
                ]}
              >
                Yes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={this.props.disabled}
            onPress={() => this.handleSelect(false)}
            style={[
              styles.button,
              {
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              },
              /* eslint-disable */
              this.state.isActive === null
                ? {}
                : this.state.isActive
                  ? {}
                  : { backgroundColor: '#CE0A24' },
            ]}
          >
            <View style={styles.activeTextStyle}>
              <Text
                style={[
                  styles.innerText,
                  this.state.isActive === null
                    ? {}
                    : this.state.isActive
                      ? {}
                      : { color: '#FFFFFF' },
                  /* eslint-enable */
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
