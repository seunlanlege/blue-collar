import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
// import { NavigationActions } from 'react-navigation'

import images from '../../../../../assets/images'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  backButton: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: 5,
    paddingLeft: 5,
  },
  backButtonImage: {
    paddingRight: 5,
  },
  backButtonColor: {
    color: '#4B7295',
  },
  promoText: {
    textAlign: 'center',
    color: '#4B7295',
    fontWeight: '700',
    fontSize: 20,
  },
})

class PromoCode extends React.Component {
  handlePress = () => {}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}
        >
          <View style={styles.backButtonImage}>
            <Image source={images.back} />
          </View>
          <View>
            <Text style={styles.backButtonColor}>Back</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Text style={styles.promoText}>Do you have a promo code?</Text>
          <Text style={styles.promoText}>Reedem it below.</Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-start',
            width: '80%',
          }}
        >
          <View
            style={{
              marginBottom: 40,
            }}
          >
            <TextInput
              placeholder="Enter promo code"
              style={{
                height: 45,
                padding: 10,
                borderWidth: 1,
                borderColor: '#CCC',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
              borderRadius: 5,
              backgroundColor: '#32679A',
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '500' }}>
              Redeem
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(null, null)(PromoCode)
