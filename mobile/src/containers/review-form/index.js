// @flow
import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { observer } from 'mobx-react'
import { PlaceSearchUI } from '../../components/placesmodal'

import WebViewModal from '../../views/shared/modal-webview'

import { SelectButtonForm, StarRatingForm } from '../../views/shared/redux-form'
import CircleRadioButton from '../../views/shared/circle-radio-button'
import { ReviewFormStore } from './store'

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
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#9B9B9B',
    fontWeight: '700',
  },
  title: {
    fontSize: 23,
    color: '#2F669C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wrapperMargin: {
    marginLeft: 20,
    marginRight: 20,
  },
  address: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  addressWrapper: {
    marginTop: 10,
  },
  threeTextInput: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  apt: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 120,
  },
  state: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 100,
  },
  zip: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: 120,
  },
  city: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  ownerName: {
    paddingLeft: 10,
    height: 35,
    borderWidth: 1,
    borderColor: '#DBDBDB',
  },
  circleButtonWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  rateTextWrapper: {
    marginTop: 20,
    marginLeft: 20,
  },
  rateText: {
    fontSize: 20,
    color: '#4A4A4A',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#979797',
    fontWeight: 'bold',
  },
  estimated: {
    margin: 20,
    marginRight: 60,
  },
  estimatedTitle: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  estimatedText: {
    fontSize: 16,
    paddingLeft: 20,
    height: 58,
    width: '65%',
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  commentWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  commentText: {
    fontSize: 20,
    color: '#9B9B9B',
  },
  wordCountWrapper: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  wordCount: {
    color: '#E4E4E4',
    textAlign: 'right',
    paddingRight: 5,
    paddingTop: 5,
  },
  textInputComment: {
    height: 150,
    textAlign: 'left',
    paddingLeft: 10,
    borderColor: '#E4E4E4',
    fontSize: 16,
  },
  submitWrapper: {
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 60,
    marginRight: 60,
  },
  wrapperButton: {
    height: 45,
    borderRadius: 5,
    backgroundColor: '#2F669C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
})

const navigateReviewListAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'mainTab' })],
})

@observer
export class WriteReview extends React.Component<any> {
  store = new ReviewFormStore()

  onCancel = () => {
    const { dispatch } = this.props.navigation
    dispatch(navigateReviewListAction)
  }

  keyExtractor = (item: any, index: number) => item.id

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <WebViewModal
          visible={this.store.state.modalVisible}
          toggleModal={this.store.toggleModal}
          uri="https://www.ibanet.org/Document/Default.aspx?DocumentUid=1730FC33-6D70-4469-9B9D-8A12C319468C"
        />
        <View>
          <TouchableOpacity
            onPress={this.onCancel}
            style={styles.cancelWrapper}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 26 }}>
            <Text style={styles.title}>Write a Review</Text>
          </View>

          <TouchableOpacity
            onPress={this.store.toggleModal}
            style={{ marginBottom: 26 }}
          >
            <Text style={[styles.cancelText, { textAlign: 'center' }]}>
              Legal Code of Conduct
            </Text>
          </TouchableOpacity>
          <View style={styles.wrapperMargin}>
            <TouchableOpacity onPress={() => PlaceSearchUI.show()}>
              <View
                style={{ borderWidth: 0.9, borderColor: '#a8a8a8', padding: 7 }}
              >
                <Text style={{ color: '#a8a8a8' }}>
                  {this.store.fields.place.description || 'Street Address'}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.addressWrapper}>
              <TextInput
                name="unitId"
                onChangeText={v => this.store.onchange('unitId', v)}
                placeholder="Apt / Unit #"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.city}
              />
            </View>

            <View style={styles.addressWrapper}>
              <TextInput
                name="pocName"
                onChangeText={v => this.store.onchange('pocName', v)}
                placeholder="Client Name"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.ownerName}
              />
            </View>
            <View style={styles.circleButtonWrapper}>
              <View>
                <CircleRadioButton
                  isSelected={this.store.fields.pocType === 1}
                  size={15}
                  title="Home Owner"
                  fontSize={20}
                  content={1}
                  name="pocType"
                  onSelected={() => this.store.onchange('pocType', 1)}
                />
              </View>
              <View style={styles.addressWrapper}>
                <CircleRadioButton
                  isSelected={this.store.fields.pocType === 2}
                  size={15}
                  title="Property Manager"
                  fontSize={20}
                  content={2}
                  name="pocType"
                  onSelected={() => this.store.onchange('pocType', 2)}
                />
              </View>
              <View style={styles.addressWrapper}>
                <CircleRadioButton
                  isSelected={this.store.fields.pocType === 3}
                  size={15}
                  title="Landlord"
                  fontSize={20}
                  content={3}
                  name="pocType"
                  onSelected={() => this.store.onchange('pocType', 3)}
                />
              </View>
            </View>
          </View>

          <View style={styles.rateTextWrapper}>
            <Text style={styles.rateText}>Rate Your Experience</Text>
          </View>
          <StarRatingForm
            input={{ onChange: v => this.store.onchange('starBidProcess', v) }}
            title="Bid Process:"
            name="starBidProcess"
          />
          <StarRatingForm
            title="Scope of work understood / change orders accepted:"
            name="starChangeOrdersAccepted"
            input={{
              onChange: v => this.store.onchange('starChangeOrdersAccepted', v),
            }}
          />
          <StarRatingForm
            title="Your time was respected:"
            name="starTimeRespected"
            input={{
              onChange: v => this.store.onchange('starTimeRespected', v),
            }}
          />
          <StarRatingForm
            title="Job completed without customer interference:"
            name="starJobCompleted"
            input={{
              onChange: v => this.store.onchange('starJobCompleted', v),
            }}
          />
          <StarRatingForm
            title="Payment were made to your satisfaction:"
            name="starPaymentsSatisfaction"
            input={{
              onChange: v => this.store.onchange('starPaymentsSatisfaction', v),
            }}
          />
          <StarRatingForm
            title="Would work with again"
            name="starWorkWithAgain"
            input={{
              onChange: v => this.store.onchange('starWorkWithAgain', v),
            }}
          />

          <SelectButtonForm
            title="Did home owner buy material?"
            name="boughtMaterials"
            input={{ onChange: v => this.store.onchange('boughtMaterials', v) }}
            component={SelectButtonForm}
          />
          <SelectButtonForm
            title="Designer or architect involved"
            name="otherPartyInvolved"
            component={SelectButtonForm}
            input={{
              onChange: v => this.store.onchange('otherPartyInvolved', v),
            }}
          />
          <View style={styles.estimated}>
            <View>
              <Text style={styles.estimatedTitle}>
                {'Estimated $ lost on project:'}
              </Text>
            </View>
            <View style={styles.addressWrapper}>
              <TextInput
                name="dollarsLost"
                placeholder="$"
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                style={styles.estimatedText}
                onChangeText={v => this.store.onchange('dollarsLost', v)}
              />
            </View>
          </View>

          <View style={styles.commentWrapper}>
            <View>
              <Text style={styles.commentText}>Comment:</Text>
            </View>
            <View style={styles.wordCountWrapper}>
              <Text style={styles.wordCount}>
                {this.store.fields.comments.length} / 140
              </Text>
              <TextInput
                name="comments"
                placeholder="Your professional opinion matters..."
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                multiline
                editable
                style={styles.textInputComment}
                maxLength={140}
                onChangeText={v => this.store.onchange('comments', v)}
              />
            </View>
          </View>

          <View style={styles.submitWrapper}>
            {this.store.state.loading ? (
              <ActivityIndicator color="blue" size="large" />
            ) : (
              <TouchableOpacity
                onPress={this.store.submit}
                style={styles.wrapperButton}
                disabled={!this.store.isValid}
              >
                <Text style={styles.submitText}>Submit Review</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <PlaceSearchUI onDone={this.store.onPlaceDone} />
      </KeyboardAwareScrollView>
    )
  }
}
