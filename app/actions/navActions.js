
import {
  NAV_PUSH,
  NAV_POP,
  NAV_JUMP_TO_KEY,
  NAV_JUMP_TO_INDEX,
  NAV_RESET
} from '../actions/actionTypes'

import {
  NavigationStateUtils
} from '../config/globalImports'

const push = (route) => (dispatch, getState) => {
  let state = getState()
  let navState = state.navState
  const { routes, index } = navState

  // if (routes[index].key === route.key)) {
  //   console.log('------ same, dont do anything')
  //   // return state
  // } else {
  //
  // }

    dispatch({
      type: NAV_PUSH,
      payload: {
        navigation: NavigationStateUtils.push(navState, route)
      }
    })


}

const pop = () => (dispatch, getState) => {
  console.log('pop action')

}

const jumpToKey = () => (dispatch, getState) => {
  console.log('NAV_JUMP_TO_KEY')
}
const jumpToIndex = () => (dispatch, getState) => {
  console.log('NAV_JUMP_TO_INDEX')
}
const reset = () => (dispatch, getState) => {
  console.log('NAV_RESET')
}

module.exports = {
  push,
  pop,
  jumpToKey,
  jumpToIndex,
  reset
}
