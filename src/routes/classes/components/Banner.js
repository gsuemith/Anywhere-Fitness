import React from 'react'


const Banner = ({ major, N }) => {
  const styleN = N => {
    return N ? " style" + N : ""
  }

  return (
  <section id="banner" 
    className={`${major && "major"}${styleN(N)}`}
    style={{backgroundImage: "url('images/fitness.jpg')"}}
  >
    <div className="inner">
      <header className="major">
        <h1>Classes</h1>
      </header>
      <div className="content">
        <p>Select from our many classes below</p>
        <ul className="actions">
          <li><a href="#one" className="button next scrolly">Get Started</a></li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Banner
