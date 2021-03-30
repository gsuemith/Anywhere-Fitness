import React from 'react'

const Client = () => {
  return (
    <div>
      {`${localStorage.getItem("token")}`}
    </div>
  )
}

export default Client
