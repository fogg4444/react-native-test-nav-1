import {
  NAV_PUSH,
  NAV_POP,
  NAV_JUMP_TO_KEY,
  NAV_JUMP_TO_INDEX,
  NAV_RESET
} from '../actions/actionTypes'

import * as NavigationStateUtils from 'NavigationStateUtils'

const initialNavState = {
	index: 0,
	routes: [
		{ key: 'First', title: 'First', path: 'firstView' }
	]
}

function navigationState(state = initialNavState, action) {
	switch (action.type) {
  	case NAV_PUSH:
      console.log('push in reducer', action)
      return {
        index: action.payload.navigation.index,
        routes: action.payload.navigation.routes
      }
  	case NAV_POP:
  		if (state.index === 0 || state.routes.length === 1) return state
  		return NavigationStateUtils.pop(state)

  	case NAV_JUMP_TO_KEY:
  		return NavigationStateUtils.jumpTo(state, action.key)

  	case NAV_JUMP_TO_INDEX:
  		return NavigationStateUtils.jumpToIndex(state, action.index)

  	case NAV_RESET:
  		return {
  			...state,
  			index: action.index,
  			routes: action.routes
  		}
  	default:
  		return state
  	}
}

export default navigationState
