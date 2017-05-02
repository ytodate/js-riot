import * as actions from '../constants/actions'

export function setCount(e) {
  return {
    type: actions.SET_COUNT,
    state: {
      count: 1
    }
  }
}