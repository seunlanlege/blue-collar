import CONFIG from '../../../config'
// @TODO remove if API ready
const data = require('../../dummy-data/rewards.json')

export const REWARD_ACTIONS = Object.freeze({
  FETCH: `${CONFIG.APP_NAME}/rewards/fetch`,
  FULFILLED: `${CONFIG.APP_NAME}/rewards/fulfilled`,
  REJECTED: `${CONFIG.APP_NAME}/rewards/rejected`,
})

export const rewardActions = Object.freeze({
  fetch: () => ({
    type: REWARD_ACTIONS.FETCH,
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
  loading: false,
  errorMessage: '',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REWARD_ACTIONS.FETCH:
      return { ...state, loading: true }
    case REWARD_ACTIONS.FULFILLED:
      return { ...state, rewards: action.payload, loading: false }
    case REWARD_ACTIONS.REJECTED:
      return { ...state, errorMessage: action.payload, loading: false }

    default:
      return state
  }
}

export default reducer
