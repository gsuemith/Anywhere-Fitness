import axios from 'axios'

export const URL = 'https://anywherefitness-tt16.herokuapp.com/api'

export const FETCH_CLASSES_START = "FETCH_CLASSES_START"
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS"
export const FETCH_CLASSES_FAIL = "FETCH_CLASSES_FAIL"

export const getClasses = () => dispatch => {
  dispatch({ type: FETCH_CLASSES_START })

  axios.all([
    axios.get(`${URL}/classes`),
    axios.get(`${URL}/locations`)
  ])
  .then(axios.spread((...res) => {
    console.log(res)
    dispatch({type: FETCH_CLASSES_SUCCESS, payload:{
      classes: res[0].data, locations: res[1].data
    }})
  }))
  .catch(err => dispatch({
    type: FETCH_CLASSES_FAIL, payload: err
  }))
}