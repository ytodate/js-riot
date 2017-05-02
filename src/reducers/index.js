import * as actions from '../constants/actions'
//import { handleActions } from 'redux-actions'

function setCount(state={}, updatedState) {
  let newState = state
    if (!updatedState) {
		return newState
	}
  newState.count += updatedState.count
  return newState
}

export default (state={}, action) => {
	switch (action.type) {
		case actions.SET_COUNT:
		  return setCount(state, action.state)
		default:
		  return state
	}
}