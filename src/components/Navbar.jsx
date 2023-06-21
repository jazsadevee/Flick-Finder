import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import '../Styles/NavBarStyle.css'

function Navbar() {
  const [toggle, setToggle] = useState(true)
  return (
    <Fragment>
      <nav className={toggle ? '' : 'NavBarColor'}>
        <div className='nav-options'>
          <h1 id={toggle ? '' : 'heading'}>Movie Night</h1>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
          <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
        </div>
        <div className='input-group'>
          <input type='text' placeholder='Search What To Watch' />
          <HiSearch fontSize={21} color='black' id='search' />
          <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
            <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar