// @flow
import { observable, action, computed, flow } from 'mobx'
import { AppStore } from '../../containers/store'
import { getStateCode } from '../../redux/effects/google-places'
import { show } from '../../redux/effects/api/places'
import { createToken } from '../../redux/effects/stripe'
import { post } from '../../redux/effects/api/subscription'

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
    nextStep: false,
  }

  @computed
  get isValid() {
    return (
      this.fields.name &&
      this.fields.firstName &&
      this.fields.lastName &&
      this.fields.unitId &&
      Object.keys(this.fields.trade).length > 0 &&
      this.place.placeId
    )
  }

  @action
  toggleModals = (modal: string, visible: boolean) => {
    this.modals[modal] = visible
  }

  @action
  getPlace = place => {
    this.place = place
    getStateCode(place.placeId).then(p => {
      this.place = { ...p, ...this.place }
      AppStore.setPlace(this.place)
    })

    show({ place: { id: place.placeId }, user: AppStore.auth.user }).then(p =>
      AppStore.setPlace(p),
    )
    //   .catch(() => {})
  }

  @action
  update = flow(function*() {
    this.loading = !this.loading
    const {
      name,
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
      state,
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
      yield AppStore.auth.updateUserViaApi({ userForm: { user, place } })
      this.modals.nextStep = true
    } catch (e) {
      console.log('update user detail error :', e)
    } finally {
      this.loading = !this.loading
    }
  })

  @action
  setField = (key: string, value: string) => {
    this.fields[key] = value
  }
}

export class SubscriptionStore {
  @observable
  fields = { cardNumber: '', cvc: '', expirationDate: '', cardHolderName: '' }

  @observable loading = false

  @action
  onChange = (key: string, value: string) => {
    this.fields[key] = value
  }

  @computed
  get isValid() {
    return Object.keys(this.fields).every(key => !!this.fields[key])
  }

  onSubscribe = flow(function*(action$, store) {
    try {
      this.loading = true
      const { id: token } = yield createToken(this.fields)
      yield post({
        user: AppStore.auth.user,
        token,
      }).then(user => AppStore.auth.updateUser(user))
      AppStore.auth.setIsAuth(true)
    } catch (e) {
      console.log('Error onSubscribe', e)
    } finally {
      this.loading = false
    }
  })
}
