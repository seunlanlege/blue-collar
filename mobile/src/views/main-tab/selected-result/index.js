import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import images from '../../../../assets/images'
import SelectButton from '../../shared/search-select'
import Result from './result'
import PropertyItem from './PropertyItem'

import { writeReviewActions } from '../../../redux/modules/review'

const SEARCH_WIDTH = Dimensions.get('window').width / 6
const SEARCH_HEIGHT = Dimensions.get('window').width / 8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flex: 1,
    marginTop: '10%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    width: '85%',
    flexDirection: 'row',
  },
  textUpperButton: {
    fontSize: 16,
    color: '#2F669C',
    textAlign: 'center',
  },
  innerButtonReivew: {
    flex: 1,
    marginTop: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '75%',
  },
  button: {
    height: SEARCH_HEIGHT + 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F669C',
    borderRadius: 5,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  searchIcon: {
    height: SEARCH_HEIGHT,
    width: SEARCH_WIDTH,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
    shadowOffset: { width: 1, height: 4 },
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(151,151,151,0.1)',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  textInputContainer: {
    flex: 1,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
    shadowOffset: { width: 1, height: 4 },
  },
  textInput: {
    height: SEARCH_HEIGHT,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: 'rgba(151,151,151,0.1)',
    paddingLeft: 12,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  recentReviewWrapper: {
    marginTop: 15,
    marginBottom: 10,
  },
  recentReviewText: {
    fontSize: 20,
    color: '#9B9B9B',
  },
  loadingWrapper: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
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
  bidCounter: {
    flexDirection: 'row',
    backgroundColor: '#2F669C',
    width: '85%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bidText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonNoResult: {
    marginTop: 10,
    width: '100%',
  },
  marginTop20: {
    marginTop: 20,
  },
  itemCenter: {
    alignItems: 'center',
  },
  noresultWrapper: {
    marginTop: 10,
    justifyContent: 'center',
  },
  textNoResult: {
    fontSize: 20,
    color: '#E30613',
    textAlign: 'center',
  },
})

const mapStateToProps = state => state.review

const mapDispatchToProps = dispatch => ({
  fetchReviewFn: () => dispatch(writeReviewActions.fetchReview()),
  searchReviewFn: query => dispatch(writeReviewActions.searchReview(query)),
  selectReviewFn: data => dispatch(writeReviewActions.selectReview(data)),
})

const properties = [
  { id: 1, icon_url: images.carpenter, item_name: 'Carpenter', amount: 2 },
  {
    id: 2,
    icon_url: images.carpenter,
    item_name: 'Cleanouts/Demolition',
    amount: 1,
  },
  { id: 3, icon_url: images.carpenter, item_name: 'Electrician', amount: 2 },
  {
    id: 4,
    icon_url: images.carpenter,
    item_name: 'General Contractor',
    amount: 2,
  },
  { id: 5, icon_url: images.carpenter, item_name: 'Gutter', amount: 2 },
  { id: 6, icon_url: images.carpenter, item_name: 'Fence', amount: 1 },
  { id: 7, icon_url: images.carpenter, item_name: 'Framer', amount: 1 },
  { id: 8, icon_url: images.carpenter, item_name: 'Floring/Tile', amount: 1 },
  { id: 9, icon_url: images.carpenter, item_name: 'HVAC', amount: 1 },
  { id: 10, icon_url: images.carpenter, item_name: 'Landscaping', amount: 1 },
  { id: 11, icon_url: images.carpenter, item_name: 'Mason', amount: 2 },
  { id: 12, icon_url: images.carpenter, item_name: 'Movers', amount: 1 },
  {
    id: 13,
    icon_url: images.carpenter,
    item_name: 'Plasterer/Drywall',
    amount: 1,
  },
  { id: 14, icon_url: images.carpenter, item_name: 'Plumber', amount: 1 },
  { id: 15, icon_url: images.carpenter, item_name: 'Painter', amount: 1 },
  { id: 16, icon_url: images.carpenter, item_name: 'Roofer', amount: 1 },
]

const colors = [
  '#FFFEF3',
  '#E6F0FB',
  '#FCEDEF',
  '#EFFAE4',
  '#F7FEFF',
  '#FEF4E4',
  '#F2F5ED',
  '#F3F3F3',
]

class SelectedResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowProperty: false,
    }
  }
  componentWillMount() {
    this.props.fetchReviewFn()
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

  handlePress = () => {
    this.setState({ isShowProperty: !this.state.isShowProperty })
  }

  keyExtractor = (item, index) => item.id

  render() {
    const { reviews } = this.props
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.innerWrapper}>
              <TouchableOpacity style={styles.searchIcon} onPress={() => {}}>
                <Image source={images.searchTextInput} />
              </TouchableOpacity>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="Search"
                  style={styles.textInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleFocus}
                  onChangeText={text => this.handleChange(text)}
                />
              </View>
            </View>
          </View>
          {this.state.isShowProperty ? null : (
            <View style={styles.innerButtonReivew}>
              <View style={styles.buttonWrapper}>
                <Text style={styles.textUpperButton}>
                  Were you recently contacted to bid a job at this location?
                </Text>

                <View>
                  <SelectButton />
                </View>
              </View>
            </View>
          )}
          <TouchableOpacity
            disabled={reviews.length === 0}
            style={[
              styles.bidCounter,
              this.state.isShowProperty ? styles.marginTop20 : null,
            ]}
            onPress={this.handlePress}
          >
            <View>
              <Image source={images.hand} />
            </View>
            <View>
              <Text style={styles.bidText}>
                {`${reviews.length || 0} active bids at this property`}
              </Text>
            </View>
          </TouchableOpacity>
          {this.state.isShowProperty ? (
            <PropertyItem properties={properties} colors={colors} />
          ) : (
            <Result
              navigation={this.props.navigation}
              reviews={reviews.slice(0, 10)}
              writeReview={this.writeReview}
              handleSelect={this.handleSelect}
            />
          )}
        </View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedResult)
