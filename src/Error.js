import React from 'react'
import BackHome from './BackHome'

const Error = () => {
  return (
    <div className="container errorSection">
        <BackHome />
        <h3> The page you are trying to see doesn't exist. <br /> kindly click the back home button to make a new search. </h3>
    </div>
  )
}

export default Error