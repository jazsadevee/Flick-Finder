import axios from 'axios'
import React, { useEffect } from 'react'

function TvShows() {
  const Api = 'https://api.themoviedb.org/3/dicover/tv/'

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
      }
    })
    console.log(data);
  }
  useEffect(() => {
    TvShows()
  })
  return (
    <div>TvShows</div>
  )
}

export default TvShows