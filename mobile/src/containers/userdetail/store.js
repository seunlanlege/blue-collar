import { observable, action, toJS } from 'mobx'
import { AppStore } from '../../containers/store'
import { getStateCode } from '../../redux/effects/google-places'

export class UserDetail {
  @observable loading = false
  @observable
  fields = {
    name: '',
    firstName: '',
    lastName: '',
    unitId: '',
    jobPosition: 0,
    contactable: false,
    trade: {},
  }

  @observable
  place = {
    placeId: '',
    state: '',
    formattedAddress: '',
    coordinate: '',
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
  getPlace = place => {
    this.place = place
    getStateCode(place.placeId).then(place => {
      this.place = { ...place, ...this.place }
    })
  }

  @action
  update = async () => {
    this.loading = !this.loading
    const {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
      unitId,
    } = this.fields

    const {
      formattedAddress,
      placeId,
      coordinate: { lat, lng },
    } = this.place
    const user = {
      firstName,
      lastName,
      trade,
      jobPosition,
      contactable,
    }

    const place = {
      formattedAddress,
      googleId: placeId,
      name,
      category: 1,
      lat,
      lng,
      unitId,
      state,
    }

    try {
      await AppStore.auth.updateUser({ userForm: { user, place } })
      AppStore.auth.setIsAuth(true)
    } catch (e) {
    } finally {
      runInAction(() => (this.loading = !this.loading))
    }
  }

  @action
  setField = (key: string, value: string) => {
    this.fields[key] = value
  }
}
