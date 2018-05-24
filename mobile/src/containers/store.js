// @flow
import { observable, action, flow } from 'mobx'
import { persist } from 'mobx-persist'
import { Auth } from './auth'
import { getLocation, getStatus } from '../redux/effects/location'

class Application {
  @persist('object', Auth)
  @observable
  auth: Auth = new Auth()

  @observable
  location: {
    latitude: '',
    longitude: '',
  }

  constructor() {
    this.getLocation()
  }

  getLocation = flow(function*() {
    const status = yield getStatus()
    const coords = yield getLocation()
    if (status === 'granted') {
      this.location = coords
    }
  })
}

export const AppStore = new Application()
