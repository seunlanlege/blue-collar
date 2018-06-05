import React from 'react'
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import { notify } from '../../redux/effects/ambassador-notify'
import { actions } from '../../redux/modules/modals'
import images from '../../../assets/images'
import styles from '../shared/styles'

const localStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.8,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    width: '80%',
  },
  buttonContainer: {
    flex: 0.7,
    justifyContent: 'space-around',
  },
  mainButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F669C',
    borderColor: '#4369B0',
    borderRadius: 6,
  },
  minorButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2F669C',
    borderRadius: 6,
  },
  mainText: { color: '#FFFFFF', fontSize: 16, fontWeight: '300' },
  minorText: {
    color: '#2F669C',
    fontSize: 18,
    fontWeight: '300',
  },
})

const mapStateToProps = state => ({
  modals: state.modals,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  toggleComingSoon: () => dispatch(actions.toggle('comingSoon', false)),
  toggleSignUp: () => dispatch(actions.toggle('signUp', false)),
})

class ComingSoon extends React.Component {
  alertMessage = user =>
    Alert.alert(
      '',
      'A Blue Collar Lists representative will reach out to you shortly about the program.',
      [{ text: 'Ok', onPress: () => notify(user) }],
    )

  proceedTrialFn = () => {
    this.props.toggleComingSoon()
    this.props.toggleSignUp()
  }

  render() {
    const { comingSoon } = this.props.modals
    const { user } = this.state

    return (
      <Modal animationType="slide" visible={comingSoon}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={localStyles.container}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#2F669C',
                  textAlign: 'center',
                }}
              >
                Thank you for joining, Let’s Build this together.
              </Text>
            </View>
            <View style={localStyles.imageContainer}>
              <Image
                source={images.comingSoon}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
            </View>
            <View style={localStyles.textContainer}>
              <Text
                style={{
                  fontFamily: 'roboto',
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 19,
                  color: '#2F669C',
                }}
              >
                Enjoy your Free Trial. Search, Read, Write, and Enter to Win
                Tools, Toys, Trips and More while building the platform to help
                your business
              </Text>
            </View>
            <View style={localStyles.viewContainer}>
              <View style={localStyles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => this.alertMessage(user)}
                  style={localStyles.mainButton}
                >
                  <Text style={localStyles.mainText}>
                    Earn $ Become a BCL Ambassador
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={localStyles.minorButton}
                  onPress={this.proceedTrialFn}
                >
                  <Text style={localStyles.minorText}>
                    Proceed to Free Trial
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)
