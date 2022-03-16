import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(countries[0])
    return (
        <div>
            <h1 className='header-text'>Visiting every country of the world!</h1>
            <h4>Available country: {countries.length}</h4>
            <div className='main'>
                {
                    countries.map(country =>
                        <Country
                            name={country.name.common}
                            official={country.name.official}
                            flags={country.flags.png}
                            population={country.population}
                            capital={country.capital}
                            continents={country.continents}>
                        </Country>)
                }
            </div>
        </div>
    );
};
function Country(props) {
    return (
        <div className='country'>
            <img className='flags' src={props.flags} alt="" />
            <h2>{props.name}</h2>
            <p>Official Name: {props.official}</p>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <p>Continents: {props.continents}</p>
        </div>
    )
}
export default Countries;