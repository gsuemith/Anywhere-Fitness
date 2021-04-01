import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'

import { CLEAR_CLASS_FORM, getClasses, putClass } from '../../../actions'
import { CHANGE_CLASS_FORM, changeClassForm } from '../../../actions'

const dateOptions = {
  month:'numeric', day:'numeric', year:'numeric'
}
const timeOptions = {
  hour: 'numeric', minute:'2-digit', hour12:true
}

const levels = ['Beginner', 'Beginner-Intermediate', 
  'Intermediate', 'Intermediate-Advanced', 'Advanced']

const EditClass = ({ getClasses, changeClassForm, putClass }) => {
  const { classId } = useParams()
  const classes = useSelector(state => state.classes)
  const locations = useSelector(state => state.locations)
  const form = useSelector(state => state.createClassForm)
  const [classTypes, setClassTypes] = useState([])
  const [locationNames, setLocationNames] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const { push } = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
    if (classes.length === 0){
      getClasses()
    }
    //extract list of class types from classes
    setClassTypes(classes.reduce((types, curr) => {
      if (!types.includes(curr.type)){
        return [...types, curr.type]
      }
      return types
    }, []))

    //reduce locations to location names
    setLocationNames(locations.reduce((names, loc) => {
      if (!names.includes(loc.location)){
        return [...names, loc.location]
      }
      return names
    }, [])) 
    
  }, [getClasses, classes, locations])

  useEffect(() => {
    //set form to class parameters
    const classToEdit = classes.find(aClass => {
      return parseInt(classId) === aClass.id
    }) 

    if (!classToEdit){
      return;
    }

    Object.keys(classToEdit).forEach(key => {
      //convert to
      if(key === 'duration'){
        let time = parseInt(classToEdit[key])
        classToEdit[key] = time < 15 ? time*60 : time
      }
      changeClassForm({
        name:key, value:classToEdit[key]
      })
    })
    
    changeClassForm({
      name: 'dateTime',
      value: (new Date(classToEdit.date + ' ' + 
        classToEdit.startTime
          .split('.').join('')))
        .toISOString()
        .slice(0, 14) + '00'
    })
  }, [classes, classId, changeClassForm])

  // to set earliest time to 12 hours from now
  const after12Hours = () => {
    let later = Date.now() + 12*3600*1000;
    later = (new Date(later))
      .toISOString()
      .slice(0, 14);
    
    return later + '00'
  }

  const handleChange = e => {
    const { name, value } = e.target
    dispatch({type: CHANGE_CLASS_FORM, payload:{ name, value }})
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    const formIsValid = Object.keys(form).reduce((isValid, name)=>{
      return isValid = isValid && form[name]
    }, true)

    if (formIsValid){
      const { id, name, type, level, duration, classSize, attendees } = form
      const newClass = { 
        name, type, level, classSize, attendees
      }
      newClass.duration = duration >= 60 
        ?
        `${duration/60} hour${duration > 60 ? 's':''}` 
        : 
        `${duration} minutes`;

      const { location, dateTime, locationId } = form
      const fullDate = new Date(dateTime);
      const newLocation = {
        location, 
        date: fullDate.toLocaleDateString('en-US', dateOptions),
        startTime: fullDate.toLocaleTimeString('en-US', timeOptions)
      }

      putClass({id: id, data: newClass}, 
        {id: locationId, data: newLocation});
      setErrorMessage('');
      dispatch({type: CLEAR_CLASS_FORM})
      push('/classes')
    } else {
      setErrorMessage('!Please make sure all fields are filled!')
    }
  }

  return (
  <section>
    <section id="banner" />
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
            locationNames.map((location, i) => (
              <option value={location} key={i}/>
            ))
          }
        </datalist>
      </div>
      <div className="field half">
        <label htmlFor="dateTime">Date and Time</label>
        <input type="datetime-local" name="dateTime" id="dateTime" min={after12Hours()} onChange={handleChange} value={form.dateTime || after12Hours()}/>
      </div>
      <div className="field half">
        <label htmlFor="level">Level</label>
        <input type="text" list="levels" name="level" id="level" onChange={handleChange} value={form.level}/>
        <datalist id="levels">
          {
            levels.map((level, i) => (
              <option value={level} key={i}/>
            ))
          }
        </datalist>
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
      <li>{errorMessage && <h4>{errorMessage}</h4>}</li>
    </ul>
  </form>
  </section>
  </div>
  </section>
  )
}

export default connect(null, { getClasses, changeClassForm, putClass })(EditClass)