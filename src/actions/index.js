import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const URL = 'https://anywherefitness-tt16.herokuapp.com/api'

export const CHANGE_CLASS_FORM = "CHANGE_CLASS_FORM"
export const CLEAR_CLASS_FORM = "CLEAR_CLASS_FORM"

export const POST_CLASS_START = "POST_CLASS_START"
export const POST_CLASS_SUCCESS = "POST_CLASS_SUCCESS"
export const POST_CLASS_LOCATION = "POST_CLASS_LOCATION"
export const POST_CLASS_FAIL = "POST_CLASS_FAIL"

export const PUT_CLASS_START = "PUT_CLASS_START"
export const PUT_CLASS_SUCCESS = "PUT_CLASS_SUCCESS"
export const PUT_CLASS_LOCATION = "PUT_CLASS_LOCATION"
export const PUT_CLASS_FAIL = "PUT_CLASS_FAIL"

export const FETCH_CLASSES_START = "FETCH_CLASSES_START"
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS"
export const FETCH_CLASSES_FAIL = "FETCH_CLASSES_FAIL"

export const changeClassForm = target => {
  const { name, value } = target
  return {type: CHANGE_CLASS_FORM, payload:{ name, value }}
}

export const postClass = (newClass, newLocation) => dispatch => {
  dispatch({type:POST_CLASS_START})
  console.log(newClass, newLocation)
  axiosWithAuth().post(`${URL}/locations`, newLocation)
  .then(res => {
    return res.data
  })
  .then(location => {
    dispatch({type:POST_CLASS_LOCATION, payload: location})
    newClass.location = location.id
    return axiosWithAuth()
      .post(`${URL}/classes`, newClass)
  })
  .then(res => {
    console.log(res.data)
    const postedClass = res.data
    dispatch({type:POST_CLASS_SUCCESS, payload:postedClass})
  })
  .catch(err => {
    console.log(err)
    dispatch({type:POST_CLASS_FAIL, payload:err})
  })
}

export const putClass = (newClass, newLocation) => dispatch => {
  dispatch({type: PUT_CLASS_START})
  console.log(newClass)
  axiosWithAuth()
    .put(`${URL}/locations/${newLocation.id}`, newLocation.data)
    .then(res => {
      dispatch({type:POST_CLASS_LOCATION, payload: res.data})
      newClass.data.location = res.data.id
      return axiosWithAuth()
        .put(`${URL}/classes/${newClass.id}`, newClass.data)
    })
    .then(res => {
      console.log(res.data)
      const postedClass = res.data
      dispatch({type:POST_CLASS_SUCCESS, payload:postedClass})
    })
    .catch(err => {
      console.log('put error', err)
      dispatch({type: PUT_CLASS_FAIL, payload: err})
    })
}

export const getClasses = () => dispatch => {
  dispatch({ type: FETCH_CLASSES_START })

  axios.all([
    axios.get(`${URL}/classes`),
    axios.get(`${URL}/locations`)
  ])
  .then(axios.spread((...res) => {
    // join locations with classes
    const classes = res[0].data.map(fitClass => {
      const { id, location, date, startTime} = res[1].data
        .find(location => {
          return fitClass.location === location.id
        })
      return { ...fitClass, location, date, 
        startTime, locationId: id }
    })

    dispatch({
      type: FETCH_CLASSES_SUCCESS, 
      payload:{ classes: classes, locations: res[1].data}
    })
  }))
  .catch(err => dispatch({
    type: FETCH_CLASSES_FAIL, payload: err
  }))
}