import React from 'react'


const SearchForm = () => {



  return (
  <section>
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="fields">
            <div className="field quarter">
              <label htmlFor="type">Sport</label>
              <input type="text" name="type" id="type" />
            </div>
            <div className="field quarter">
              <label htmlFor="level">Level</label>
              <input type="text" name="level" id="level" />
            </div>
            <div className="field quarter">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" />
            </div>
            <div className="field quarter">
              <label htmlFor="name">Class Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field third">
              <label htmlFor="startDateTime">From</label>
              <input type="datetime-local" name="startDateTime" id="startDateTime" />
            </div>
            <div className="field third">
              <label htmlFor="endDateTime">To</label>
              <input type="datetime-local" name="endDateTime" id="endDateTime" />
            </div>
            <div className="field third">
              <label htmlFor="maxDuration">Max Duration</label>
              <input type="number" name="maxDuration" id="maxDuration" />
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Search" className="primary" /></li>
            <li><input type="reset" value="Clear" /></li>
          </ul>
        </form>
      </section>
    </div>
  </section>
  )
}

export default SearchForm
