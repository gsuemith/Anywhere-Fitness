import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { getClasses, changeSearchForm, searchClasses, clearSearchForm } from '../../../actions'

const SearchForm = ({ getClasses, changeSearchForm, searchClasses, clearSearchForm}) => {
  const classes = useSelector(state => state.classes)
  const search = useSelector(state => state.searchForm)
  const results = useSelector(state => state.searchResults)
 
  useEffect(() => {
    if(classes.length === 0){
      getClasses();
    }
    console.log("Classes", classes)
    console.log("Results", results)
  }, [classes, getClasses, results])

  const handleChange = e => {
    const { name, value } = e.target;
    changeSearchForm(name, value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(search)
    searchClasses();
  }

  return (
  <section>
    <div className="inner">
      <section>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field quarter">
              <label htmlFor="type">Sport</label>
              <input type="text" name="type" id="type" onChange={handleChange} value={search.type}/>
            </div>
            <div className="field quarter">
              <label htmlFor="level">Level</label>
              <input type="text" name="level" id="level" onChange={handleChange} value={search.text}/>
            </div>
            <div className="field quarter">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" onChange={handleChange} value={search.location}/>
            </div>
            <div className="field quarter">
              <label htmlFor="name">Class Name</label>
              <input type="text" name="name" id="name" onChange={handleChange} value={search.name}/>
            </div>
            <div className="field third">
              <label htmlFor="startDateTime">From</label>
              <input type="datetime-local" name="startDateTime" id="startDateTime" onChange={handleChange} value={search.startDateTime}/>
            </div>
            <div className="field third">
              <label htmlFor="endDateTime">To</label>
              <input type="datetime-local" name="endDateTime" id="endDateTime" onChange={handleChange} value={search.endDateTime}/>
            </div>
            <div className="field third">
              <label htmlFor="maxDuration">Max Duration</label>
              <input type="number" name="maxDuration" id="maxDuration" onChange={handleChange} value={search.maxDuration}/>
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Search" className="primary" /></li>
            <li><input type="reset" value="Clear" onClick={clearSearchForm}/></li>
          </ul>
        </form>
      </section>
    </div>
  </section>
  )
}

export default connect(null, { getClasses, changeSearchForm, searchClasses, clearSearchForm })(SearchForm)
