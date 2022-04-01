import React, {useContext} from 'react'
import Country from './Country';
import { AppContextApi } from './AppContext'

const CountryList = () => {

    const  { countries } = useContext(AppContextApi);

    if(countries.length < 1){
        return (
            <h3> You may have made a mistake with the country name, kindly try again !!! </h3>
        )
    }

  return (
    <section className="countryListSection">

        {
            countries.map((eachCountry, index) => {
                const {name, population, region, capital, flags } = eachCountry;
                return (
                    <Country key={index} 
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    flags={flags} />
                )
            })
        }
       
    </section>
  )
}

export default CountryList