import axios from 'axios'

export const FETCH_CLASSES_START = "FETCH_CLASSES_START"
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS"
export const FETCH_CLASSES_FAIL = "FETCH_CLASSES_FAIL"

export const getClasses = () => dispatch => {
  dispatch({ type: FETCH_CLASSES_START })

  axios.get('https://anywherefitness-tt16.herokuapp.com/api/classes')
  .then(({ data }) => {
    dispatch({type: FETCH_CLASSES_SUCCESS, payload: data})
  })
  .catch(err => dispatch({
    type: FETCH_CLASSES_FAIL, payload: err
  }))
}