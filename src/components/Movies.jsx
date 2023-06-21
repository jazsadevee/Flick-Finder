import React, { Fragment } from 'react'

function Movies() {
  const MovieCall = () => {
    const data = await axios.get( , {
      params: {
        api_key: '82f1500284448feca2bdea8ff7139c69'
      }
    })
  }
  return (
    <Fragment>
      <div>Movies</div>
      
    </Fragment>
  )
}

export default Movies