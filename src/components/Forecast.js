import React, { useState } from 'react';
import Conditions from './Conditions';

const Forecast = () => {

  const [data, setData] = useState(null);

  const getForecast = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '39f6070a55msh3089c213a1175efp1a944ajsn0b08325dd6cb',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
    
    fetch('https://open-weather13.p.rapidapi.com/city/london', options)
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <button onClick={getForecast}>Get Forecast</button>
      <div>
        {data && <Conditions data={data}/>}
      </div>
    </div>
  )
};

export default Forecast;
