//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';
import AddedCountry from './Components/AddedCountry/AddedCountry';

function App(prop) {
  
  const [countries, setCounties] = useState([])

  const [addedCountry, setAddedCountry] = useState([])

  const eventlisteners = (country) => {
    const newCountry = [...addedCountry, country];
    setAddedCountry(newCountry);
  }
  
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCounties(data))
  },[])

  return (
    
    <div className="App">
      <AddedCountry count={addedCountry} ></AddedCountry>
      
      {
        countries.map(country => <Countries eventlisteners={eventlisteners} key={country.alpha2Code} country={country}></Countries>)
      }
    </div>
  );
}



export default App;
