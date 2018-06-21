// @flow

import { observable, action, computed } from 'mobx'
import { getStateCode } from '../../redux/effects/google-places'
import { createReview } from '../../redux/effects/api/places'
import { AppStore } from '../../containers/store'

export class ReviewFormStore {
  @observable
  fields: { [item: string]: any } = {
    comments: '',
    pocType: '',
    place: {
      description: '',
    },
    pocName: '',
    unitId: '',
    starBidProcess: '',
    starChangeOrdersAccepted: '',
    starTimeRespected: '',
    starJobCompleted: '',
    starPaymentsSatisfaction: '',
    starWorkWithAgain: '',
    otherPartyInvolved: undefined,
    boughtMaterials: undefined,
    dollarsLost: undefined,
  }

  @computed
  get isValid() {
    return (
      this.fields.comments &&
      this.fields.pocType &&
      this.fields.pocName &&
      this.fields.unitId &&
      this.fields.starBidProcess &&
      this.fields.starChangeOrdersAccepted &&
      this.fields.starTimeRespected &&
      this.fields.starJobCompleted &&
      this.fields.starPaymentsSatisfaction &&
      this.fields.starWorkWithAgain !== undefined &&
      this.fields.otherPartyInvolved !== undefined &&
      this.fields.dollarsLost !== undefined &&
      this.fields.boughtMaterials
    )
  }

  @observable state = { modalVisible: false, loading: false }

  @action
  onchange = (key: string, value: any) => {
    this.fields[key] = value
  }

  @action
  toggleModal = () => {
    this.state.modalVisible = !this.state.modalVisible
  }

  @action
  onPlaceDone = (place: any) => {
    this.fields.place = place
    getStateCode(place.placeId).then(p => {
      this.fields.place = { ...p, ...this.fields.place }
    })
  }

  @action
  submit = (cb: () => void) => {
    this.state.loading = true
    const {
      pocName,
      pocType,
      unitId,
      starBidProcess,
      starChangeOrdersAccepted,
      starTimeRespected,
      starJobCompleted,
      starPaymentsSatisfaction,
      starWorkWithAgain,
      otherPartyInvolved,
      boughtMaterials,
      dollarsLost,
      comments,
      place: placeData,
    } = this.fields

    // not sure if
    const {
      placeId,
      state,
      formattedAddress,
      coordinate: { lat, lng },
    } = placeData

    const place = {
      googleId: placeId,
      unitId,
      name: pocName,
      formattedAddress,
      category: 2,
      lat,
      lng,
      state,
    }
    const starOverall = Math.floor(
      (starBidProcess +
        starChangeOrdersAccepted +
        starTimeRespected +
        starJobCompleted +
        starPaymentsSatisfaction +
        starWorkWithAgain) /
        6,
    )
    const reviewForm = {
      pocName,
      pocType,
      comments,
      starBidProcess,
      starChangeOrdersAccepted,
      starTimeRespected,
      starJobCompleted,
      starPaymentsSatisfaction,
      starWorkWithAgain,
      starOverall,
      boughtMaterials,
      otherPartyInvolved,
      dollarsLost,
    }

    createReview({
      user: AppStore.auth.user,
      place,
      reviewForm,
    }).then(cb)
  }
}
