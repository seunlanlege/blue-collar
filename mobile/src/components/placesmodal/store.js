// @flow
import { observable, toJS, action } from 'mobx'
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils'
import debounce from 'lodash.debounce'
import { AppStore } from '../../containers/store'
import { searchRequest } from '../../redux/effects/google-places'

export class PlacesModal {
  @observable
  state = {
    isVisible: false,
  }

  @action
  toggleVisible = () => {
    this.state.isVisible = !this.state.isVisible
  }

  @observable places: IPromiseBasedObservable<any[]>

  search = debounce(
    action((value: string) => {
      this.places = fromPromise(
        searchRequest(
          AppStore.location.latitude,
          AppStore.location.longitude,
          value,
        ),
      )
    }),
    500,
  )

  resetPlaces = () => {
    this.places = fromPromise(Promise.resolve([]))
  }
}
