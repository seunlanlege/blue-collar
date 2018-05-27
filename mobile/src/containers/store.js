// @flow
import { observable, action, flow, computed } from 'mobx'
import { Auth } from './auth'
import { getLocation, getStatus } from '../redux/effects/location'
import CONFIG from '../../config'

class Application {
  auth = new Auth()

  @observable
  location = {
    latitude: '',
    longitude: '',
  }

  @observable place = {}

  constructor() {
    this.getLocation()
  }

  @action
  setPlace = (place: any) => {
    this.place = place
  }

  @computed
  get targetedAd() {
    if (!this.place.state) {
      return ''
    }
    return CONFIG.STATE_OPTIONS[this.place.state]
      ? 'subscription'
      : 'coming-soon'
  }

  getLocation = flow(function*() {
    const status = yield getStatus()
    try {
      if (status === 'granted') {
        const coords = yield getLocation()

        this.location = coords
      }
    } catch (_) {}
  })
}

export const AppStore = new Application()
