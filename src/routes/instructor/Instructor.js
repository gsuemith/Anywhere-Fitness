import React from 'react'
import Banner from './components/Banner'

import axiosWithAuth from '../../utils/axiosWithAuth'
import ClassForm from './components/ClassForm'

const Instructor = () => {
  return (
    <>
      <Banner N={3}/>
      <ClassForm />
    </>
  )
}

export default Instructor
