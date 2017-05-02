import * as actions from '../constants/actions'
//import { handleActions } from 'redux-actions'

function setCount(state, updatedState) {
  let newState = state
    if (!updatedState) {
		return newState
	}
  newState = updatedState
  return newState
}

export default (state={}, action) => {
	switch (action.type) {
		case actions.SET_COUNT:
		  return setState(state, action.state)
		default:
		  return state
	}
}