import React from 'react'
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  WebView,
  View,
} from 'react-native'

import images from '../../../assets/images'

class WebViewModal extends React.Component {
  state = {
    loading: false,
  }
  render() {
    const { uri, visible, toggleModal, backButton } = this.props
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
            justifyContent: 'flex-start',
            marginRight: 10,
          }}
        >
          {backButton ? (
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={{
                marginTop: 20,
                flex: 0.2,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                paddingTop: 5,
                paddingLeft: 5,
              }}
            >
              <View style={{ paddingRight: 5 }}>
                <Image
                  source={images.back}
                  style={{ width: 10, height: 10 }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                    textDecorationColor: '#3d6587',
                    color: '#4B7295',
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
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
          )}
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
