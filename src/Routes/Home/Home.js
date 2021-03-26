import React from 'react'
import Banner from './Banner'
import Contact from './Contact/Contact'
import PT from './PT'
import Tiles from './Tiles'

const Home = () => {
  return (
    < >
    <Banner/>
      <div id="main">
        <Tiles />
        <PT/>
      </div>
    <Contact/>
    </>
  )
}

export default Home
