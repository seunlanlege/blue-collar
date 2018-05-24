import { observable, action } from 'mobx'

export class UserDetail {
  @observable loading = false
  @observable
  fields = {
    name: '',
    firstName: '',
    lastName: '',
    jobPosition: 0,
    contactable: false,
    trade: {},
  }

  @observable
  modals = {
    trade: false,
    places: false,
  }

  @action
  toggleModals = (modal: string, visible: boolean) => {
    this.modals[modal] = visible
  }

  @action
  setField = (key: string, value: string) => {
    this.fields[key] = value
  }
}
