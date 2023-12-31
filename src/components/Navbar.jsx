import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { Routes, Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import TvShows from './TvShows'
import Trending from './Trending'
import '../Styles/NavBarStyle.css'
import movieLogo from '../Assets/Logo.jpg'


export const Container = React.createContext()

function Navbar() {
  const [toggle, setToggle] = useState(true)
  const [inputValue, setInputValue] = useState('')
  return (
    <Container.Provider value={{ toggle, inputValue }}>
      <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
          <div className='nav-options'>
            <div class='logo'>
              <img src={movieLogo} height={90} width={100} alt="Logo" />
            </div>
            <h1 id={toggle ? '' : 'heading'}>Flick Finder</h1>

            <NavLink to="" style={({ isActive }) => { return { color: isActive ? '#fff' : '#B9F5D8' } }}>
              <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
            </NavLink>
            <NavLink to="/TvShows" style={({ isActive }) => { return { color: isActive ? '#fff' : '#B9F5D8' } }}>
              <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
            </NavLink>
            <NavLink to="/Trending" style={({ isActive }) => { return { color: isActive ? '#fff' : '#B9F5D8' } }}>
              <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
            </NavLink>
          </div>
          <div className='input-group'>
            <input type='text' placeholder='Search What To Watch' onChange={(e) => setInputValue(e.target.value)} />
            <HiSearch fontSize={21} color='black' id='search' />
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='' element={<Movies />} />
          <Route path='TvShows' element={<TvShows />} />
          <Route path='Trending' element={<Trending />} />
        </Routes>

      </Fragment>
      <Fragment>
        <footer>
          <nav className={toggle ? '' : 'navBarColor'}>
            <div className='contact'>
            <h3 id={toggle ? '' : 'heading'}><u>Contacts</u></h3>
            <a href="https://github.com/jazsadevee">
              <BsGithub fontSize={35} color='black' id='contact' />
            </a>
            <a href="https://www.linkedin.com/in/jasminevillanuevadev/">
              <AiFillLinkedin fontSize={35} color='black' id='contact' />
              </a>
            </div>
          </nav>
        </footer>
      </Fragment>
    </Container.Provider>
  )
}

export default Navbar