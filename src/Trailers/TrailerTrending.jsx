import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../Styles/Trailer.css'

function TrailerTrending({ TrendTitle, toggle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable

  function handleSearch() {
    setVideo(TrendTitle)
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  useEffect(() => {
    handleSearch()
  }, [videoURL])
  return (
    <Fragment>
      <div className='Container'>
      </div>
      <div className='player'>
        <h1 id={toggle ? 'Trailer-name-dark' : 'Trailer-name-light'}>{TrendTitle} </h1>
        <ReactPlayer url={videoURL} controls={true} width={'800px'} height={'400px'} muted={false} />
      </div>
    </Fragment>
  )
}

export default TrailerTrending