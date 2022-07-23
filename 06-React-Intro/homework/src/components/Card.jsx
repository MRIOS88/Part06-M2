import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.card}>
      <button className={`${style.btn} ${style.colorWhite}`}  onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div className={style.info}>
        <div>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='image not found' />
      </div>
    </div>
  )
};