import React from 'react'

const Header = () => {
  // const menuVisible = e => {
  //   e.preventDefault();
  //   document
  //     .querySelector('body')
  //     .classList
  //     .toggle('is-menu-visible') 
  // }

  return (
  <header id="header" className="alt">
    <a href="/#" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
    <nav>
      <a href="#menu">Menu</a>
    </nav>
  </header>
  )
}

export default Header
