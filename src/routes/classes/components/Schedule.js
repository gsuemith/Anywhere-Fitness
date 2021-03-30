import React from 'react'
import styled from 'styled-components'

const Schedule = () => {
  return (
    <Eight>
      
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
        <Class />
     
    </Eight>
  )
}

const Eight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  background-color: #2e3450;
  height: 40em;
  @media (max-width:980px) {
    height: 80em;
    flex-wrap: nowrap;
  }
`

const Class = styled.div`
  border-bottom: solid 1px rgba(212, 212, 255, 0.1);
  border-right: solid 1px rgba(212, 212, 255, 0.1);
  flex: 0 0 25%;
  min-width: 48vw;
  @media (max-width:980px) {
    flex: 0 0 12.5%;
  }
`

export default Schedule
