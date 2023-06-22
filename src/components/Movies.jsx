import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

function Movies() {
  const [moviesData, setMoviesData] = useState([])
  const Api = "https://api.themoviedb.org/3/discover/movie"

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
      }
    })
    console.log(data.data.results);
  }
  useEffect(() => {
    MovieCall()
  }, [])
  return (
    <Fragment>
      <h1>Movies</h1>
    </Fragment>
  )
}

export default Movies