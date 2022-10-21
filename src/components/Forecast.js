import React, { useState } from 'react';
import Conditions from './Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {

  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('imperial');

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '39f6070a55msh3089c213a1175efp1a944ajsn0b08325dd6cb',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const getForecast = (e) => {
    e.preventDefault();
    
    fetch(`https://weatherapi-com.p.rapsidapi.com/current.json?q=${city}`, options)
      .then(response => response.json())
      .then(weatherData => {
        console.log(weatherData);
        setData(weatherData);
      })
      .catch(err => console.log(err.message));
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input 
          type='text'
          placeholder='Enter City'
          maxLength='50'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={classes.TextInput}
        />
        <label>
          <input 
            type='radio'
            name='units'
            checked={unit === 'imperial'}
            value='imperial'
            onChange={(e) => setUnit(e.target.value)}
            className={classes.Radio}
          />
          Fahrenheit
        </label>
        <label>
          <input 
            type='radio'
            name='units'
            checked={unit === 'metric'}
            value='metric'
            onChange={(e) => setUnit(e.target.value)}
            className={classes.Radio}
          />
          Celcius
        </label>
        <button type='submit' className={classes.Button}>Get Forecast</button>
      </form>
      <div>
        {data && <Conditions data={data} unit={unit}/>}
      </div>
    </div>
  )
};

export default Forecast;
