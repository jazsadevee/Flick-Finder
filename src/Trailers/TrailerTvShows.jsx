import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../Styles/Trailer.css'

function TrailerTvShows({ TvShowsTitle, toggle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable

  function handleSearch() {
    setVideo(TvShowsTitle)
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
        <h1 id={toggle ? 'Trailer-name-dark' : 'Trailer-name-light'}>{TvShowsTitle} </h1>
        <ReactPlayer url={videoURL} controls={true} width={'800px'} height={'400px'} muted={false} />
      </div>
    </Fragment>
  )
}

export default TrailerTvShows