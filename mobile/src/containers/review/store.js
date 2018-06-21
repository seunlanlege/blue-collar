// @flow

import { observable, action } from 'mobx'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils'
import { show } from '../../redux/effects/api/users'
import { AppStore } from '../store'

export class ReviewStore {
  @observable user: IPromiseBasedObservable<any> = fromPromise.resolve()

  @action
  fetchUser = (userId: string) => {
    this.user = fromPromise(
      show({
        user: { id: userId, authHeaders: AppStore.auth.user.authHeaders },
      }),
    )
  }
}
