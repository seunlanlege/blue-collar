// @flow
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import { observable } from 'mobx'
import { getRecent } from '../../../redux/effects/api/reviews'

export class ReviewsStore {
  @observable state: IPromiseBasedObservable<any> = fromPromise(getRecent())
}
