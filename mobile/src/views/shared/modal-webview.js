import React from 'react'
import { Modal, Text, TouchableOpacity, WebView, View } from 'react-native'

class WebViewModal extends React.Component {
  state = {
    loading: false,
  }
  render() {
    const { uri, visible, toggleModal } = this.props
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 30,
              paddingTop: 5,
              paddingRight: 9,
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: '#919191',
            }}
          >
            <Text style={{ fontSize: 16 }}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: 10 }}>
          <WebView
            source={{
              uri,
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
            automaticallyAdjustContentInsets
            scalesPageToFit
            startInLoadingState={this.state.loading}
            renderLoading={() => this.setState({ loading: true })}
            onLoad={() => this.setState({ loading: false })}
          />
        </View>
      </Modal>
    )
  }
}

export default WebViewModal
