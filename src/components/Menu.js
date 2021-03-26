import React from 'react'

const Menu = () => {
  return (
    <div className="inner">
      <ul className="links">
        <li><a href="index.html">Home</a></li>
        <li><a href="landing.html">Landing</a></li>
        <li><a href="generic.html">Generic</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
      <ul className="actions stacked">
        <li><a href="\#" className="button primary fit">Get Started</a></li>
        <li><a href="\#" className="button fit">Log In</a></li>
      </ul>
      <a className="close" href="#menu">
        "Close"
      </a>
    </div>
  )
}

export default Menu
