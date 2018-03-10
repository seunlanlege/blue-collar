import CONFIG from '../../../config'
// @TODO remove if API ready
const data = require('../../dummy-data/rewards.json')

export const REWARD_ACTIONS = Object.freeze({
  FETCH: `${CONFIG.APP_NAME}/rewards/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/rewards/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/rewards/rejected`,
  REDEEM: `${CONFIG.APP_NAME}/rewards/redeem`,
  REDEEM_SUCCESS: `${CONFIG.APP_NAME}/rewards/redeem-success`,
})

export const rewardActions = Object.freeze({
  fetch: () => ({
    type: REWARD_ACTIONS.FETCH,
  }),
  redeem: () => ({
    type: REWARD_ACTIONS.REDEEM,
  }),
  redeemSuccess: payload => ({
    type: REWARD_ACTIONS.REDEEM_SUCCESS,
    payload: 'success',
  }),
  fulfilled: payload => ({
    type: REWARD_ACTIONS.FULFILLED,
    payload: data,
  }),
  rejected: payload => ({
    type: REWARD_ACTIONS.REJECTED,
    payload,
  }),
})

const initState = {
  rewards: [],
  redeemData: '',
  loading: false,
  errorMessage: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REWARD_ACTIONS.FETCH:
    case REWARD_ACTIONS.REDEEM:
      return { ...state, loading: true }
    case REWARD_ACTIONS.FULFILLED:
      return {
        ...state,
        rewards: action.payload,
        loading: false,
      }
    case REWARD_ACTIONS.REDEEM_SUCCESS:
      return {
        ...state,
        redeemData: action.payload,
        loading: false,
      }
    case REWARD_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }

    default:
      return state
  }
}

export default reducer
