import React from 'react'
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
// import { NavigationActions } from 'react-navigation'

import { redeemActions } from '../../../../redux/modules/redeems'

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
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#4B7295',
  },
  promoText: {
    textAlign: 'center',
    color: '#4B7295',
    fontWeight: '700',
    fontSize: 20,
  },
})

const mapStateToProps = state => state.redeems

const mapDispatchToProps = dispatch => ({
  updateField: value => dispatch(redeemActions.updateField(value)),
  handlePress: () => dispatch(redeemActions.request()),
})

class PromoCode extends React.Component {
  componentWillReceiveProps(nextProps) {
    // @TODO do something here later
  }

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
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              onChangeText={text => this.props.updateField(text)}
              value={this.props.promoCode}
            />
          </View>
          {this.props.loading ? (
            <ActivityIndicator size="large" color="#4B7295" />
          ) : (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                borderRadius: 5,
                backgroundColor: '#32679A',
              }}
              onPress={this.props.handlePress}
            >
              <Text
                style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '500' }}
              >
                Redeem
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode)
