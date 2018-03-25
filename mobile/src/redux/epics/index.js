import { combineEpics } from 'redux-observable'
import { fetchReviewEpic, searchReviewEpic } from './review-epic'
import { fbAuthRequest } from './signup-epic'
import { fetchRewardEpic, redeemPointEpic } from './reward-epic'
import { authRequestEpic, logOutRequestEpic } from './login'
import { shareAppEpic } from './share'
import { searchRequestEpic, getPlaceRequestEpic } from './search'
import { proceedUserDataEpic } from './user-data-entry'

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
)
