import React from 'react'
import { Modal, Text, TouchableOpacity, WebView, View } from 'react-native'

const WebViewModal = ({ visible, toggleModal }) => (
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
          uri:
            'https://www.ibanet.org/Document/Default.aspx?DocumentUid=1730FC33-6D70-4469-9B9D-8A12C319468C',
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        automaticallyAdjustContentInsets
        scalesPageToFit
      />
    </View>
  </Modal>
)

export default WebViewModal
