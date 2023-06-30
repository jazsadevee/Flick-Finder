import React, { Fragment, useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Container } from './Navbar'
import '../Styles/Videos.css'
import NoPoster from './NoPoster.jpg'
import TrailerTvShows from '../Trailers/TrailerTvShows'

function TvShows() {
  const { toggle, inputValue } = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState([true])
  const [title, setTitle] = useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
        query: input
      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      TvShows()
    }, 100)
    // TvShows()
  }, [input])
  // console.log(showData)
  const TvShowTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)
  }

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {showData.map((shows) => {
            return (
              <Fragment key={shows.id}>
                <div id={trailer ? 'container' : 'NoContainer'}>
                  <BsFillPlayBtnFill color='white' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => TvShowTitle(shows)} />
                  <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoPoster} alt='' onClick={() => TvShowTitle(shows)} />
                  <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>
                    {shows.name}
                  </h3>
                </div>
              </Fragment>
            )
          })}
          {trailer ? console.log : <TrailerTvShows TvShowsTitle={title} toggle={toggle} />}
          <AiOutlineCloseSquare id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={35} color='white' cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment >
  )
}

export default TvShows