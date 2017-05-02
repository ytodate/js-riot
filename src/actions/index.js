import * as actions from '../constants/actions'

export function setCount(value) {
  return {
    type: actions.SET_COUNT,
    count: value + 1
  }
}