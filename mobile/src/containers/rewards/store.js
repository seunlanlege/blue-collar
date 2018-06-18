// @flow
import { observable, reaction } from 'mobx'
import { Alert } from 'react-native'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import { AppStore } from '../store'
import { post } from '../../redux/effects/api/rewards'

export class RewardStore {
  @observable
  redeemPromise: IPromiseBasedObservable<any> = fromPromise(Promise.resolve())

  @observable loading = undefined

  redeem = (redeemType: any, amount: number, txType: any, index: number) => {
    this.loading = index
    console.log('Hahah')
    this.redeemPromise = fromPromise(
      post({
        user: AppStore.auth.user,
        redeemType,
        amount,
        txType,
      }),
    )

    reaction(
      () => this.redeemPromise.state,
      state => {
        console.log('Value :', this.redeemPromise.value)
        if (state === 'fulfilled') {
          Alert.alert(`You've have been redeemed a ${''}`)
        }
      },
    )
  }
}
