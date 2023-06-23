import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import '../Styles/Videos.css'
import NoPoster from './NoPoster.jpg'
import { Container } from './Navbar'

function Movies() {
  const { toggle } = useContext(Container)
  const [moviesData, setMoviesData] = useState([])
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    MovieCall()
  }, [])
  console.log(moviesData);
  // console.log(Images);
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id='container'>
                  <BsFillPlayBtnFill color='white' fontSize={40} id='playIcon' />
                  <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoPoster} alt='' />
                  <h3>{movie.title}</h3>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Movies