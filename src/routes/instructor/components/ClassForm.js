import React from 'react'

const ClassForm = () => {
  return (
  <section>
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Class Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="type">Sport</label>
              <input type="text" name="type" id="type" />
            </div>
            <div className="field half">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" />
            </div>
            <div className="field half">
              <label htmlFor="dateTime">Date and Time</label>
              <input type="datetime-local" name="dateTime" id="dateTime" />
            </div>
            <div className="field half">
              <label htmlFor="level">Level</label>
              <input type="text" name="level" id="level" />
            </div>
            <div className="field quarter">
              <label htmlFor="duration">Duration</label>
              <input type="number" name="duration" id="duration" />
            </div>
            <div className="field quarter">
              <label htmlFor="classSize">Limit to</label>
              <input type="number" name="classSize" id="classSize" />
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

export default ClassForm
