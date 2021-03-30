import { FETCH_CLASSES_FAIL, FETCH_CLASSES_START, FETCH_CLASSES_SUCCESS } from '../actions'

import { initialState } from './initialState'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_CLASSES_START: return {
    ...state,
    isFetching: true,
    error: '',
  }

  case FETCH_CLASSES_SUCCESS: return {
    ...state,
    isFetching: false,
    error: '',
    classes: payload.classes,
    locations: payload.locations
  }

  case FETCH_CLASSES_FAIL: return {
    ...state,
    isFetching: false,
    error: payload
  }

  default:
    return state
  }
}

export default reducer