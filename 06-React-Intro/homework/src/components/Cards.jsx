import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {//si hago destructuring no importa el orden de los arg. Otra forma es hacer class.
  // acá va tu código
  // tip, podés usar un map //Yo: si usamos arrow fn con el map, si ponemos () despues de la flecha, toma un return implícito. sino poner {return}.
  //en apariencia no hace falta en el return linea 7 los (), pero ayudan a leer mejor el código. 
  return (
    <div className={styles.Container}>
      {
        props.cities && props.cities.map(city => (//por si no hay cities, q no se rompa el codigo.
          <Card
          key={city.Id} //cambiarlo por el index despues
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
        ))
      }
    </div>
  )
};