import React from 'react'
import { Routes, Route } from 'react-router'
import TopBar from './TopBar'
import CountryAPI from './CountryAPI'
import SingleCountry from './SingleCountry'
import BorderCountry from './BorderCountry'
import Error from './Error'


const Router = () => {
  return (
    <section>
        <TopBar />
        <Routes>
            <Route path="/" element= { <CountryAPI /> } />
            <Route path="country/:name" element = { <SingleCountry />} />
            <Route path ="alpha/:eachBorder" element = {<BorderCountry />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </section>
  )
}

export default Router