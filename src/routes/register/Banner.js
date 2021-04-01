import React from 'react'


const Banner = ({ major, N }) => {
  const styleN = N => {
    return N ? " style" + N : ""
  }

  return (
  <section id="banner" 
    className={`${major && "major"}${styleN(N)}`}
    style={{backgroundImage: "url('images/fitness2.jpg')"}}
  >
    <div className="inner">
      <header className="major">
        <h1>Please Sign Up Here</h1>
      </header>
    </div>
  </section>
  )
}

export default Banner
