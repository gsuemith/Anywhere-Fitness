import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { getClasses } from '../../../actions'
import { CHANGE_CLASS_FORM } from '../../../actions'


const ClassForm = ({ getClasses }) => {
  const classes = useSelector(state => state.classes)
  const locations = useSelector(state => state.locations)
  const form = useSelector(state => state.createClassForm)
  const [classTypes, setClassTypes] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    if (classes.length === 0){
      getClasses()
    }

    setClassTypes(classes.reduce((types, curr) => {
      if (!types.includes(curr.type)){
        return [...types, curr.type]
      }
      return types
    }, []))
    console.log(classes)
  }, [getClasses, classes, locations])

  const handleChange = e => {
    const { name, value } = e.target
    dispatch({type: CHANGE_CLASS_FORM, payload:{ name, value }})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return (
  <section>
  <div className="inner">
  <section>
  <form onSubmit={handleSubmit}>
    <div className="fields">
      <div className="field half">
        <label htmlFor="name">Class Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={form.name}/>
      </div>
      <div className="field half">
        <label htmlFor="type">Sport</label>
        <input type="text" list="classTypes" name="type" id="type" onChange={handleChange} value={form.type}/>
        <datalist id="classTypes">
          {
            classTypes.map((type, i) => (
              <option value={type} key={i}/>
            ))
          }
        </datalist>
      </div>
      <div className="field half">
        <label htmlFor="location">Location</label>
        <input type="text" list="locations" name="location" id="location" onChange={handleChange} value={form.location}/>
        <datalist id="locations">
          {
            locations.map(location => (
              <option value={location.location} key={location.id}/>
            ))
          }
        </datalist>
      </div>
      <div className="field half">
        <label htmlFor="dateTime">Date and Time</label>
        <input type="datetime-local" name="dateTime" id="dateTime" min={Date()} onChange={handleChange} value={form.dateTime}/>
      </div>
      <div className="field half">
        <label htmlFor="level">Level</label>
        <input type="text" name="level" id="level" onChange={handleChange} value={form.level}/>
      </div>
      <div className="field quarter">
        <label htmlFor="duration">Duration</label>
        <input type="number" name="duration" id="duration" min="15" step="15" placeholder="Minutes" onChange={handleChange} value={form.duration}/>
      </div>
      <div className="field quarter">
        <label htmlFor="classSize">Limit to</label>
        <input type="number" name="classSize" id="classSize" min="1" placeholder="e.g. 15 Max Students" onChange={handleChange} value={form.classSize}/>
      </div>
    </div>
    <ul className="actions">
      <li><input type="submit" value="Submit" className="primary" /></li>
      <li><input type="reset" value="Clear" /></li>
    </ul>
  </form>
  </section>
  </div>
  </section>
  )
}

export default connect(null, { getClasses })(ClassForm)
