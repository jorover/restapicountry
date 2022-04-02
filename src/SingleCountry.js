import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import SingleCountryCode from './SingleCountryCode';
import BackHome from './BackHome';
import Loading from './Loading';

const url = 'https://restcountries.com/v2';


const SingleCountry = () => {

const {name} = useParams();

const [singleCountry, setSingleCountry] = useState([]);

const [nameLoading, setnameLoading] = React.useState(true);




useEffect(() => {

    const fetchNameData = async () => {
        setnameLoading(true)
         try {
            const nameData = await (await fetch(`${url}/name/${name}`)).json();
            const newNameData = nameData.map(eachNameCountry => eachNameCountry);
            setSingleCountry(newNameData)
            setnameLoading(false)  
             
         } catch (error) {
             console.log(error)
             setnameLoading(false)
             
         }
     }

fetchNameData();

}, [name]);


if(nameLoading) {
    return (
        <Loading />
    )
}




  return (
    <section className="singleCountrySection">

        <div className="container">

            <header>

               <BackHome />

            </header>


            <section className="singleCountryContainer">

                {
                    singleCountry.map((item, index) => {
                        const {nativeName,
                            name, 
                            population, 
                            region, 
                            subregion, 
                            capital, 
                            topLevelDomain, 
                            borders,
                            currencies, 
                            languages,
                            flags} = item;


                        return (
                            <section key={index}>

                                <header className="countryFlagContent">
                                    <figure className="countryFlag">
                                        <img src={flags.png} alt="country flag" />
                                    </figure>

                                    <aside className="countryDetailsContainer">
                                        <h4> {name} </h4>
                                        <section className="countryDetailsContent">
                                            <article className="countryDetails">
                                                <h6> Native Name: <p> {nativeName} </p></h6>
                                                <h6> Population: <p> {population} </p></h6>
                                                <h6> Region: <p> {region} </p></h6>
                                                <h6> Sub Region: <p> {subregion} </p></h6>
                                                <h6> Capital: <p> {capital} </p></h6>
                                            </article>

                                            <article className="countryDetails">
                                                <h6> Top Level Domain: <p> {topLevelDomain[0]} </p></h6>
                                                <h6> Currencies: <div> {currencies.map((eachCurreny, index) => {
                                                    const {name} = eachCurreny;
                                                    return (
                                                        <p key={index}> {name} </p>
                                                    )
                                                })} </div></h6>
                                                <h6> Languages: 
                                                    <div> {languages.map((eachItem, index) => {
                                                        const {name, nativeName} = eachItem;
                                                        return (
                                                            <article key={index} className="languages"> 
                                                                <p> {name}, </p> 
                                                                <p> {nativeName} </p>
                                                            </article>
                                                        
                                                        )
                                                    })} 
                                                    </div></h6>
                                            </article>
                                        </section>

                                        <footer>

                                        <h6> Border Countries: </h6>
                                        {borders ? borders.map((eachBorder, index) => {
                                                        return (
                                                        <SingleCountryCode key={index} code={eachBorder} />
                                                        )
                                                    }) : <h5> Country Border list not available </h5> }
                                    </footer>
                                    </aside>

                                </header>

                            </section>
                        )
                    })
                }

            </section>

         </div>
    </section>
  )
}

export default SingleCountry