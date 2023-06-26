import axios from 'axios'
import React, { Fragment, useEffect, useContext, useState } from 'react'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Container } from './Navbar'
import NoPoster from './NoPoster.jpg'

function TvShows() {
  const { toggle, inputValue } = useContext(Container)
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState([false])
  const Api = 'https://api.themoviedb.org/3/discover/tv'
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

  // ---------------------------------------------------------------------------------------------------------------------
  // CODE TO FIX MULTIPLE API CALLS


  // function TvShows() {
  //   const apiEndpoint = 'https://api.themoviedb.org/3/discover/tv'
  //   const apiKey = '82f1500284448feca2bdea8ff7139c69'
  //   const imagesEndpoint = 'https://image.tmdb.org/t/p/w500/'

  //   const [showData, setShowData] = useState([])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(apiEndpoint, {
  //         params: {
  //           api_key: apiKey,
  //         },
  //       })
  //       setShowData(response.data.results)
  //     } catch (error) {
  //       console.error('Error fetching TV show data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // console.log(showData)

  // ---------------------------------------------------------------------------------------------------------------------


  return (
    <Fragment>
      {showData.map((shows) => {
        return (
          <Fragment>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <BsFillPlayBtnFill color='white' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={} />
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoPoster} alt='' />
              <h3 id={shows.name.length > 28 ? 'smaller-Text' : ''} className={toggle ? 'mainColor' : 'secondaryColor'}>
                {shows.name}
              </h3>
            </div>
          </Fragment>
        )
      })}
      <AiOutlineCloseSquare onClick={() => setTrailer(true)} />
    </Fragment>

  )
}

export default TvShows