import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TvShows() {
  const Api = 'https://api.themoviedb.org/3/discover/tv'
  const [showData, setShowData] = useState([])

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
      }
    })
    const results = (data.data.results)
    setShowData(results)
    console.log(showData);
  }
  useEffect(() => {
    TvShows()
  })
  return (
    <div>TvShows</div>
  )
}

export default TvShows