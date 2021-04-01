import React, { useEffect, useState } from 'react'

const Header = () => {
  const [belowBanner, setBelowBanner] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling)
  }, [])

  const trackScrolling = () => {
    const el = document.getElementById('banner');
    if (el.getBoundingClientRect().bottom < 0) {
      setBelowBanner(true)
    } else {
      setBelowBanner(false)
    }
  };

  return (
  <header id="header" className={belowBanner ? "reveal" : "alt"}>
    <a href="/" className="logo"><strong>AF</strong> <span>by TT16</span></a>
    <nav>
      <a href="#menu">Menu</a>
    </nav>
  </header>
  )
}

export default Header
