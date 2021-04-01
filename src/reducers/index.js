import { CHANGE_CLASS_FORM, FETCH_CLASSES_FAIL, FETCH_CLASSES_START, FETCH_CLASSES_SUCCESS, POST_CLASS_FAIL, POST_CLASS_LOCATION, POST_CLASS_START, POST_CLASS_SUCCESS, CLEAR_CLASS_FORM, PUT_CLASS_START, PUT_CLASS_LOCATION, PUT_CLASS_SUCCESS, PUT_CLASS_FAIL, LOG_IN } from '../actions'

import { initialState } from './initialState'

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case LOG_IN: return {
    ...state,
    isLoggedIn: true,
    user: payload,
  }  
  case CHANGE_CLASS_FORM: return {
    ...state,
    createClassForm: {
      ...state.createClassForm, [payload.name]: payload.value
    }
  }

  case CLEAR_CLASS_FORM: return {
    ...state, 
    createClassForm: initialState.createClassForm
  }

  case POST_CLASS_START: return {
    ...state,
    isPosting: true,
    error: ''
  }

  case POST_CLASS_LOCATION: return {
    ...state,
    locations: [...state.locations, payload]
  }

  case POST_CLASS_SUCCESS: return {
    ...state,
    isPosting: false,
    error: '',
    classes: [...state.classes, payload]
  }

  case POST_CLASS_FAIL: return {
    ...state,
    isPosting: false,
    error: payload
  }

  case PUT_CLASS_START: return {
    ...state,
    isPosting: true,
    error: ''
  }

  case PUT_CLASS_LOCATION: return {
    ...state,
    error: '',
    locations: state.locations.map(loc => {
      if (loc.id === payload.id) {
        return payload
      }
      return loc
    })
  }
  
  case PUT_CLASS_SUCCESS: return {
    ...state,
    error: '',
    isPosting: false,
    classes: state.classes.map(class_i => {
      if (class_i.id === payload.id){
        return payload
      }
      return class_i
    })
  }

  case PUT_CLASS_FAIL: return {
    ...state,
    isPosting: false,
    error: payload
  }

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