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
