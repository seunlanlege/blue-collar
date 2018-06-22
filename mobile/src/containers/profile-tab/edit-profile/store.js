// @flow
import { observable, action, runInAction, toJS } from 'mobx'
import { AppStore } from '../../store'

export class EditProfileStore {
  @observable modals = { trade: false }

  @observable fields = { trade: {} }

  @action
  setField = (key: string, value: any) => {
    if (key.indexOf('.') !== -1) {
      key.split('.').reduce((acc, curr, index, array) => {
        if (index === array.length - 1) {
          runInAction(() => {
            acc[curr] = value
          })
        }
        return acc[curr]
      }, AppStore.auth.user)
      return
    }
    if (typeof value === 'object') {
      AppStore.auth.user[key] = { ...AppStore.auth.user[key], ...value }
    } else {
      AppStore.auth.user[key] = value
    }
  }

  @action
  toggleModals = (modal: string, status: boolean) => {
    this.modals[modal] = status
  }
}
