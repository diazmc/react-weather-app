import React from 'react';
import classes from './Conditions.module.css';

const Conditions = (props) => {

  const unit = props.unit === 'imperial' ? 'F' : 'C';
  const temp = props.unit === 'imperial' ? props.data.current.temp_f : props.data.current.temp_c;
  const icon = props.data.current.condition.icon;

  return ( 
    <div className={classes.Card}>
      <p className={classes.City}><strong>{props.data.location.name}, {props.data.location.country}</strong></p>
      <div>
        <img src={icon} alt='icon'/>
      </div>
      <p>It is currently {`${Math.round(temp)}`}&#176; {`${unit}`}</p>
      <p>{props.data.current.condition.text}</p>
    </div>
  );
};

export default Conditions;