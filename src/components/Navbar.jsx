import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import '../Styles/NavBarStyle.css'

function Navbar() {
  const [toggle, setToggle] = useState(true)
  return (
    <Fragment>
      <nav className="">
        <div className='nav-options'>
          <h1>Movie Night</h1>
          <span>Movies</span>
          <span>Tv Shows</span>
          <span>Trending</span>
        </div>
        <input type='text' placeholder='Search What To Watch' />
        <HiSearch />
        <div id='Color-Switcher'>
          <div id='Color-switcher-moved'></div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar