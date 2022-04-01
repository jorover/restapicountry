import React from 'react'
import { Link } from 'react-router-dom';



const SingleCountryCode = ( {code} ) => {

  return (
    <article className="borderList">
        <Link to= {`/alpha/${code}`}>
            <h6> {code} </h6>
        </Link>
</article>
  )
}

export default SingleCountryCode