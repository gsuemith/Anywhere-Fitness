import React from 'react'

const Nav = () => {
  return (
    < >
    <ul className="links">
      <li><a href="index.html">Home</a></li>
      <li><a href="landing.html">Landing</a></li>
      <li><a href="generic.html">Generic</a></li>
      <li><a href="elements.html">Elements</a></li>
    </ul>
    <ul className="actions stacked">
      <li><a href="/register" className="button primary fit">Get Started</a></li>
      <li><a href="/login" className="button fit">Log In</a></li>
    </ul>
    </>
  )
}

export default Nav
