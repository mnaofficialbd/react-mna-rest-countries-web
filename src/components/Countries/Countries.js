import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Visiting every country of the world!</h1>
            <h4>Available country: {countries.length}</h4>
            {
                countries.map(country => <Country name={country.name.common} population={country.population} capital={country.capital}></Country>)
            }
        </div>
    );
};
function Country(props) {
    return (
        <div className='country'>
            <h2>Name: {props.name}</h2>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
        </div>
    )
}
export default Countries;