import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import NoPoster from './NoPoster.jpg'

function TvShows() {
  const Api = 'https://api.themoviedb.org/3/discover/tv'
  const [showData, setShowData] = useState([])
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
      }
    })
    const results = (data.data.results)
    setShowData(results)
  }
  useEffect(() => {
    TvShows()
  }, [])
  console.log(showData)
  return (
    <Fragment>
      {showData.map((shows) => {
        return (
          <Fragment>
            <div id='container'>
              <BsFillPlayBtnFill color='white' fontSize={40} id='playIcon' />
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoPoster} alt='' />
              <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''}>
                {shows.name}
              </h3>
            </div>
          </Fragment>
        )
      })}
    </Fragment>

  )
}

export default TvShows