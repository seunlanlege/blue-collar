import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'
import { observer } from 'mobx-react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import RewardList from './reward-list'
import { AppStore } from '../../containers/store'

import CONFIG from '../../../config'
import { RewardStore } from './store'

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
    flex: 1,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FECA2F',
    width: '100%',
  },
  pointsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsTitle: {
    color: '#2F669C',
    flex: 1,
    marginTop: 6,
    textAlign: 'center',
    justifyContent: 'center',
  },
  pointsNumber: {
    color: 'white',
    fontSize: 42,
    flex: 2.5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  pointText: {
    color: '#1B0F04',
    fontWeight: 'bold',
    fontSize: 20,
  },
  flatList: {
    marginTop: -6,
    flex: 1,
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

@observer
export class Rewards extends React.Component {
  store = new RewardStore()

  keyExtractor = (item, index) => item.id.toString()

  render() {
    const {
      rewards: { availablePoints, lifetimePoints },
    } = AppStore.auth.user

    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
              <View style={styles.brandWrapper}>
                <Text style={styles.brandReward}>Blue Collar Rewards</Text>
              </View>
            </View>
            <View style={styles.promoTextWidth}>
              <Text style={styles.promoText}>
                Write a review = 100 points{'\n'}
                Invite others = 100 points{'\n'}
                Multiple entries allowed for all items{'\n'}
              </Text>
            </View>
          </View>
          <View style={styles.collectedPoints}>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsTitle}>MY CURRENT POINTS</Text>
              <Text style={styles.pointsNumber}>
                {`${availablePoints.toLocaleString() || 100000}`}
              </Text>
            </View>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsTitle}>MY LIFETIME POINTS</Text>
              <Text style={styles.pointsNumber}>
                {`${lifetimePoints.toLocaleString() || 0}`}
              </Text>
            </View>
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={CONFIG.REWARD_OPTIONS}
              renderItem={({ item, index }) => (
                <RewardList
                  data={item}
                  index={index}
                  loading={this.store.loading === index}
                  onRedeem={this.store.redeem}
                  user={AppStore.auth.user}
                  length={CONFIG.REWARD_OPTIONS.length - 1}
                  contestDetails={
                    <TouchableOpacity
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
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