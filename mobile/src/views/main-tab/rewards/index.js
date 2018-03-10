import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import RewardList from '../reward-list'

import { rewardActions } from '../../../redux/modules/reward'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
  },
  wrapper: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '95%',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32679A',
    width: '100%',
  },
  pointText: {
    color: '#FFFFFF',
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
})

const mapStateToProps = state => state.reward

const mapDispatchToProps = dispatch => ({
  fetchRewardFn: () => dispatch(rewardActions.fetch()),
})

class Rewards extends React.Component {
  componentWillMount() {
    this.props.fetchRewardFn()
  }

  handleChange = text => this.props.searchReviewFn(text)

  writeReview = () => {
    const navigateReviewFormAction = NavigationActions.navigate({
      routeName: 'reviewForm',
      params: {},
    })
    const { dispatch } = this.props.navigation
    dispatch(navigateReviewFormAction)
  }

  handleSelect = data => {
    this.props.selectReviewFn(data)
    const toReview = NavigationActions.navigate({
      routeName: 'mainTab',
      params: {},
      action: NavigationActions.navigate({ routeName: 'selectedReview' }),
    })
    const { dispatch } = this.props.navigation
    dispatch(toReview)
  }

  keyExtractor = (item, index) => item.id

  render() {
    return (
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
          <Text style={styles.pointText}>You Currently have 400 points</Text>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={this.props.rewards}
            renderItem={({ item, index }) => (
              <RewardList
                data={item}
                index={index}
                navigation={this.props.navigation}
                handleSelect={this.handleSelect}
              />
            )}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rewards)
