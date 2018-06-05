import React from 'react'
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { connect } from 'react-redux'
import { WebBrowser } from 'expo'

import RewardList from './reward-list'
import { actions } from '../../../redux/modules/rewards'

import CONFIG from '../../../../config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titleWrapper: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '95%',
    marginBottom: 20,
  },
  brandWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandReward: {
    paddingTop: 15,
    textAlign: 'center',
    fontSize: 24,
    color: '#2F669C',
    fontWeight: 'bold',
  },
  promoTextWidth: {
    width: '95%',
  },
  promoText: {
    textAlign: 'center',
    fontSize: 14,
  },
  collectedPoints: {
    flex: 0.08,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FECA2F',
    width: '100%',
  },
  pointText: {
    color: '#1B0F04',
    fontWeight: 'bold',
  },
  flatList: {
    flex: 0.7,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginTop: '2%',
    marginBottom: '5%',
  },
  viewContestWrapper: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  viewContest: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#9B9B9B',
    textAlign: 'center',
  },
})

const mapStateToProps = state => ({
  rewards: state.rewards,
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  redeemPointFn: (redeemType, amount, txType) =>
    dispatch(actions.redeem({ redeemType, amount, txType })),
})

class Rewards extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.rewards.reward &&
      nextProps.rewards.reward !== this.props.rewards.reward
    ) {
      Alert.alert(
        `You've have been redeemed a ${this.props.rewards.reward || ''}`,
      )
    }
  }

  keyExtractor = (item, index) => item.id.toString()

  render() {
    const { rewards, users, redeemPointFn } = this.props
    const { loading } = rewards
    const { availablePoints, lifetimePoints } = users.rewards

    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <View style={styles.brandWrapper}>
                <Text style={styles.brandReward}>Blue Collar List Rewards</Text>
              </View>
            </View>
            <View style={styles.promoTextWidth}>
              <Text style={styles.promoText}>
                Receive 100 points for every review you write and every new user
                who signs up via your referral link!
              </Text>
            </View>
          </View>
          <View style={styles.collectedPoints}>
            <Text
              style={styles.pointText}
            >{`Currently points ${availablePoints || 0}`}</Text>
            <Text style={styles.pointText}>{`Lifetime Points ${lifetimePoints ||
              0}`}</Text>
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={CONFIG.REWARD_OPTIONS}
              renderItem={({ item, index }) => (
                <RewardList
                  data={item}
                  index={index}
                  loading={loading}
                  onRedeem={redeemPointFn}
                  length={CONFIG.REWARD_OPTIONS.length - 1}
                  contestDetails={
                    <TouchableOpacity
                      onPress={() => {
                        WebBrowser.openAuthSessionAsync(
                          'https://docs.google.com/document/d/1ur8ks8nYv6VIr7q4kKKDG90Sa1fadJ5cCPwkBTci0Fs/edit?usp=sharing',
                        )
                      }}
                      style={styles.viewContestWrapper}
                    >
                      <Text style={styles.viewContest}>
                        View Contest Details
                      </Text>
                    </TouchableOpacity>
                  }
                />
              )}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rewards)
