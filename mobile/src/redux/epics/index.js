import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { authRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'
import { searchRequestEpic, getPlaceRequestEpic } from './venues'
import { proceedUserDataEpic } from './users'
import { paymentDetailEpic } from './payment-detail'

export default combineEpics(
  authRequestEpic,
  fetchReviewEpic,
  fetchRewardEpic,
  getPlaceRequestEpic,
  logOutRequestEpic,
  redeemPointEpic,
  searchRequestEpic,
  searchReviewEpic,
  fbAuthRequest,
  shareAppEpic,
  proceedUserDataEpic,
  paymentDetailEpic,
)
