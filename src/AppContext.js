import React, {useState, useEffect} from 'react'
import Loading from './Loading.js';


const AppContextApi = React.createContext();
const allUrl = 'https://restcountries.com/v2';


const AppContext = ( {children} ) => {

const [loading, setLoading] = useState(true);
const [countries, setCountries] = useState([]);
const [searchValue, setSearchValue] = useState('a');


useEffect(() => {
    const allCountries = async () => {
        setLoading(true)
        const everyCountry = `${allUrl}/all`;
        const countryList = await (await fetch(everyCountry)).json();
        const newDataList = countryList.map(item => {
            return item;
        })
    
        setCountries(newDataList);
        setLoading(false)
    }

    allCountries();

}, []);


if(loading){
    return (
        <Loading />
    )
}

    const filterRegion = async (regionValue) => {
        setLoading(true)
        if(regionValue === 'All Region'){
            let allVal = await (await fetch(`${allUrl}/all`)).json();
            let loadAllVal = allVal.map(allCountries => allCountries);
            setCountries(loadAllVal)
            setLoading(false);
        } else {
            let val = `${allUrl}/region/${regionValue}`
            const everyData = await (await fetch(val)).json();
            const everyList = everyData.map(item => {
                return item;
            });
    
            setCountries(everyList);
            setLoading(false);

        }
    }

    const filterCountryName = async () => {
        try {
        let urlLink = `${allUrl}/name/${searchValue}`;
        let everyData = await (await fetch(urlLink)).json();

        if(everyData.status === 404){
            setCountries([]);
        } else {
            let newList = everyData.map(item => {
                return item;
            })
            setCountries(newList);
        }
            
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <AppContextApi.Provider value={{ countries, filterRegion, filterCountryName, setSearchValue, loading, setLoading}} >
        {children}
    </AppContextApi.Provider>
  )
}

export {AppContext, AppContextApi}