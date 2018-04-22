import React from 'react'
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'

import { actions } from '../../../../redux/modules/subscription'

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
  innerContainer: {
    flex: 2,
    justifyContent: 'center',
    width: '80%',
  },
  subscriptionText: {
    textAlign: 'center',
    color: '#4B7295',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 20,
  },
  subscriptionItem: {
    textAlign: 'left',
    paddingBottom: 20,
    fontWeight: '500',
  },
  item: {
    fontWeight: '300',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#32679A',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  cancelMembership: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#32679A',
  },
})

const mapStateToProps = state => ({
  subscription: state.subscription,
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  cancelMembership: () => dispatch(actions.remove()),
})

const SubscriptionDetail = ({
  navigation,
  users: { subscription },
  subscription: { loading },
  cancelMembership,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <View style={styles.backButtonImage}>
        <Image source={images.back} resizeMode="contain" />
      </View>
      <View>
        <Text style={styles.backButtonColor}>Back</Text>
      </View>
    </TouchableOpacity>
    {loading ? (
      <ActivityIndicator size="large" color="#4B7295" />
    ) : (
      <View style={styles.innerContainer}>
        <Text style={styles.subscriptionText}>Subscription Details</Text>
        <Text style={styles.subscriptionItem}>
          Membership Status:{' '}
          <Text style={styles.item}>
            {subscription ? subscription.cardLastFour : 'Full Membership'}
          </Text>
        </Text>
        <Text style={styles.subscriptionItem}>
          Membership Price:{' '}
          <Text style={styles.item}>{`$${
            subscription ? subscription.price : ' '
          } /mo`}</Text>
        </Text>
        <Text style={styles.subscriptionItem}>
          Payment Source:{' '}
          <Text style={styles.item}>
            {subscription ? subscription.nextBilling : ''}
          </Text>
        </Text>
      </View>
    )}
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.cancelMembership}
        onPress={() => cancelMembership()}
      >
        <Text style={[styles.buttonText, { color: '#32679A' }]}>
          Cancel Membership
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate({ routeName: 'userSubscription' })}
      >
        <Text style={styles.buttonText}>Update Credit Card</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetail)
