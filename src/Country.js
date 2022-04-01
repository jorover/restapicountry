import React from 'react'
import { Link } from 'react-router-dom'

const Country = ( {name, population, region, capital, flags} ) => {
  return (
    <figure className="countryCard">
        <img src={flags.png} alt="flags" />
        <figcaption className="countryCardContent">
            <h4> {name} </h4>
            <h6> Population:<p>{population} </p></h6>
            <h6> Region:<p>{region} </p></h6>
            <h6> Capital:<p>{capital} </p></h6>
            <Link to = {`country/${name}`}>
                <button className="readMoreBtn">
                  Read More
                </button>
            </Link>
        </figcaption>
    </figure>
  )
}

export default Country