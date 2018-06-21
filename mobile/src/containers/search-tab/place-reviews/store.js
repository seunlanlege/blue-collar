import { observable, action } from 'mobx'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils'
import { show } from '../../../redux/effects/api/places'
import { AppStore } from '../../store'

export class PlaceReviewStore {
  @observable place: IPromiseBasedObservable<any>

  @action
  fetchPlace = (place: any) => {
    this.place = fromPromise(show({ user: AppStore.auth.user, place }))
  }
}
