// @flow
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import { observable, action } from 'mobx'
import { getRecent } from '../../../redux/effects/api/reviews'

export class ReviewsStore {
  @observable reviews: IPromiseBasedObservable<any> = fromPromise(getRecent())

  @observable
  state = {
    searchModalVisible: false,
  }

  @action
  toggleSearchModal = () => {
    this.state.searchModalVisible = !this.state.searchModalVisible
  }
}
