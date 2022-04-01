import React, {useContext} from 'react'
import Logo from './search.png'
import { AppContextApi } from './AppContext'

const SearchBar = () => {


const {filterRegion, filterCountryName, setSearchValue} = useContext(AppContextApi);


  return (
        <header className="searchBarContainer">
            <form action="#" id="searchContainer">
                <img src={Logo} alt="search logo" width="30" height="30" />
                <input 
                type="text" 
                id="search" 
                placeholder="Search for a country"
                onChange = {(e) => {
                    setSearchValue(e.target.value)
                    filterCountryName();
                }
                } />
            </form>

            <aside className="selectContainer">
                <select id="selectOptions" onChange = {(e) => filterRegion (e.target.value)}>
                    <option> Select Region </option>
                    <option value="All Region"> All Region </option>
                    <option value="Africa"> Africa </option>
                    <option value="Americas"> Americas </option>
                    <option value="Europe"> Europe </option>
                    <option value="Oceania"> Oceania </option>
                </select>
            </aside>
        </header>
  )
}

export default SearchBar