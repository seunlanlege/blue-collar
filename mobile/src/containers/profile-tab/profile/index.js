// @flow
import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import images from '../../../../assets/images'
import { ReviewList } from '../../review-list'
import { AppStore } from '../../store'
import { show } from '../../../redux/effects/api/users'

const BUTTON_WIDTH = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  cancelWrapper: {
    marginTop: 10,
    marginBottom: 33,
    marginLeft: 10,
  },
  cancelText: {
    fontSize: 24,
    color: '#2F669C',
  },
  contactButton: {
    marginLeft: BUTTON_WIDTH,
    marginRight: BUTTON_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 20,
    backgroundColor: '#2F669C',
    borderRadius: 5,
  },
  profileWrapper: {
    marginBottom: 26,
    alignItems: 'center',
  },
  imageProfile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperMargin: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginTop: '2%',
    marginBottom: '5%',
  },
  ownerName: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  fullName: {
    fontSize: 16,
    color: '#A6A6A6',
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  flatListWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
})

const navigateToReviewList = NavigationActions.navigate({
  routeName: 'reviews',
  params: {},
})

@observer
export class Profile extends React.Component<any, any> {
  state = {
    isSelected: false,
  }

  @observable loading = true

  componentDidMount() {
    this.refetchUser()
  }

  @action
  refetchUser = () => {
    show({ user: AppStore.auth.user }).then(
      action('updateUser', user => {
        AppStore.auth.updateUser(user)
        this.loading = false
      }),
    )
  }

  handleSelect = (data: any) => {
    const toReview = NavigationActions.navigate({
      routeName: 'review',
      params: data,
    })

    const { rootNavigation } = this.props.screenProps
    rootNavigation.dispatch(toReview)
  }

  toReviewList = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateToReviewList)
  }

  keyExtractor = (item: any, index: number) => item.id.toString()

  render() {
    const {
      placeReviews,
      places,
      place,
      firstName,
      lastName,
      email,
    } = AppStore.auth.user

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            paddingTop: 5,
            paddingLeft: 5,
          }}
        >
          <View
            style={{
              paddingRight: 5,
            }}
          >
            <Image
              source={images.back}
              style={{ height: 10, width: 10 }}
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
        <View style={styles.profileWrapper}>
          <Image
            source={images.tradePlumberIcon}
            style={styles.imageProfile}
            resizeMode="contain"
          />
        </View>
        <View style={styles.wrapperMargin}>
          <Text style={styles.cancelText}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={[styles.wrapperMargin, { marginTop: 10 }]}>
          <Text style={styles.fullName}>{(place || {}).name || ''}</Text>
        </View>
        {this.state.isSelected ? (
          <View style={[styles.wrapperMargin, { marginTop: 10 }]}>
            <Text style={[styles.cancelText, { fontSize: 22 }]}>
              {email || ''}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() =>
              this.props.screenProps.rootNavigation.navigate({
                routeName: 'editProfile',
              })
            }
            style={styles.contactButton}
          >
            <Text style={styles.contactText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
        <View style={[styles.wrapperMargin, { marginTop: 30 }]}>
          <Text style={[styles.cancelText, { color: '#4A4A4A' }]}>
            {`${placeReviews.length} Reviews Written`}
          </Text>
        </View>
        {this.loading ? (
          <ActivityIndicator size="large" color="#4A4A4A" />
        ) : (
          <View style={styles.flatListWrapper}>
            <FlatList
              data={placeReviews}
              renderItem={({ item, index }) => (
                <ReviewList
                  data={item}
                  index={index}
                  places={places}
                  navigation={this.props.navigation}
                  handleSelect={this.handleSelect}
                />
              )}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        )}
      </ScrollView>
    )
  }
}
