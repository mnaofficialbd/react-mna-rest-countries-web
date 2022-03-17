import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    // console.log(countries[0])
    return (
        <div className='body-container'>
            <div className='header-area'>
                <h1 className='header-text'>Visiting every country of the world!</h1>
                <p>Web Degine and Development: <span className='developer'>M N A</span></p>
                <h4>Available country: {countries.length}</h4>
            </div>
            <div className='main'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}>
                    </Country>)
                }
            </div>
        </div>
    );
};
const Country = (props) => {
    const { name, flags, capital, continents, area, population } = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img className='flags' src={flags.png} alt="" />
            <p>Official Name: {name.official}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area} km²</p>
            <p>Population: {population}</p>
            <p>Continents: {continents}</p>
        </div>
    )
}
export default Countries;