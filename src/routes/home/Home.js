import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Banner from './components/Banner'
import Contact from './components/Contact/Contact'
import PT from './components/PT'
import Tiles from './components/Tiles'

import { getClasses } from '../../actions'


const Home = ({ getClasses }) => {
  useEffect(() => {
    getClasses()
  }, [getClasses])

//for development use only//
useEffect(() => {
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhcnJpY2sxMCIsInJvbGUiOjEsImlhdCI6MTYxNzI4ODY5NCwiZXhwIjoxNjE3MzEwMjk0fQ.5t8a2I9btynFKsvsKluIyUlEbHJzB7_zJ_kfIMVK_ac')
}, [])
//for development use only//

  return (
    < >
    <Banner major={true}/>
      <div id="main">
        <Tiles />
        <PT/>
      </div>
    <Contact/>
    </>
  )
}

export default connect(null, { getClasses })(Home)
