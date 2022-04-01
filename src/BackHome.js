import React from 'react'
import Back from './arrow.png'
import { Link } from 'react-router-dom'

const BackHome = () => {
  return (
    <div>
        <Link to="/" className="backHome">
            <img src={ Back } alt="back arrow" />
            <p> Back Home </p>
        </Link>

    </div>
  )
}

export default BackHome