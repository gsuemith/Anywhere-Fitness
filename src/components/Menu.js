import React from 'react'

const Menu = () => {
  return (
  <nav id="menu">
    <ul className="links">
      <li><a href="/#">Home</a></li>
      <li><a href="/#">Landing</a></li>
      <li><a href="/#">Generic</a></li>
      <li><a href="/#">Elements</a></li>
    </ul>
    <ul className="actions stacked">
      <li><a href="/#" className="button primary fit">Get Started</a></li>
      <li><a href="/#" className="button fit">Log In</a></li>
    </ul>
  </nav>
  )
}

export default Menu
