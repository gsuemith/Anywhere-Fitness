import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import Banner from './components/Banner'
import SearchForm from './components/SearchForm'
import Schedule from './components/Schedule'

import { getClasses } from '../../actions'

const Classes = ({ getClasses }) => {
  const classes = useSelector(state => state.classes)

  // fetch api classes
  useEffect(() => {
    if (classes.length === 0)
      getClasses()
  }, [getClasses, classes])

  return (
    <>
      <Banner N={2}/>
      <SearchForm />
      <Schedule />
    </>
  )
}


export default connect(null, {
  getClasses
})(Classes)
