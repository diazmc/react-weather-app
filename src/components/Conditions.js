import React from 'react';

const Conditions = (props) => {
  return ( 
    <div>
      <p><strong>{props.data.name}</strong></p>
      <p>It is currently {Math.round(props.data.main.temp)} degrees out with {props.data.weather[0].description}.</p>
    </div>
  );
};

export default Conditions;