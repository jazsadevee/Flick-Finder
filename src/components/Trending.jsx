import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './Navbar'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import NoPoster from './NoPoster.jpg'
import '../Styles/Videos.css'
import TrailerTrending from '../Trailers/TrailerTrending'

function Trending() {
  const { toggle } = useContext(Container)
  const [trending, setTrending] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [trendTitle, setTrendTitle] = useState('')
  const TrendShown = 'trending/all/week'
  const Api = 'https://api.themoviedb.org/3/'
  const Images = 'https://image.tmdb.org/t/p/w500/'

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendShown}`, {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69',
      }
    })
    const results = data.data.results
    setTrending(results)
  }
  useEffect(() => {
    setTimeout(() => {
      Trends()
    }, 100)
  }, [])
  // console.log(trending);
  const TrendTitle = (trend) => {
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
          {trending.map((trend) => {
            return (
              <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                  <BsFillPlayBtnFill color='white' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={() => TrendTitle(trend)} />
                  <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoPoster} alt='' onClick={() => TrendTitle(trend)} />
                  <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryColor'} >
                    {trend.title}
                  </h3>
                </div>
              </Fragment>
            )
          })}
          {trailer ? console.log : <TrailerTrending TrendTitle={trendTitle} toggle={toggle} />}
          <AiOutlineCloseSquare id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={35} color='white' cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  )
}

export default Trending