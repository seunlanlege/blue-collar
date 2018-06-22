// @flow
import { action, observable } from 'mobx'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils'

import { remove } from '../../../redux/effects/api/subscription'
import { AppStore } from '../../store'

export class SubscriptionStore {
  @observable cancelSubcriptionPromise: IPromiseBasedObservable<any>

  @action
  cancelSubcription = () => {
    this.cancelSubcriptionPromise = fromPromise(
      remove({ user: AppStore.auth.user }),
    )
  }
}
