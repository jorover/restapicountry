import React from 'react'
import SearchBar from './SearchBar'
import CountryList from './CountryList'

const CountryAPI = () => {
  return (
    <main className="countryListContainer">
        <div className="container">
            <SearchBar />
            <CountryList />
        </div>
    </main>
  )
}

export default CountryAPI