import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Container } from './Navbar'
import '../Styles/Videos.css'
import NoPoster from './NoPoster.jpg'
import TrailerMovies from '../Trailers/TrailerMovies'

function Movies() {
  const { toggle, inputValue } = useContext(Container)
  const input = inputValue
  const [moviesData, setMoviesData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [movieTitle, setMovieTitle] = useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
        query: input
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      MovieCall()
    }, 100)
    MovieCall()
  }, [input])
  // console.log(moviesData);
  // console.log(Images);
  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                  <BsFillPlayBtnFill color='white' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => MoviesTitle(movie)} />
                  <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoPoster} alt='' onClick={() => MoviesTitle(movie)} />
                  <h3 id={movie.title.length > 28 ? 'smaller-Text' : ''} >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            )
          })}
          {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} />}
          <AiOutlineCloseSquare id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={35} color='white' cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  )
}

export default Movies