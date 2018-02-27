import AppNavigator from '../../views/navigation'

const initState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Onboard'),
)

const navReducer = (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}

export default navReducer
