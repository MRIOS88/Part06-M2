import React, { useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  const [cities, setCities] = useState([]);//Estado del componente.config inicial.

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  //function onSearch(ciudad) {
    //como arg llega la ciudad buscada en el searchbar, la q el usuario busca.
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json()) // r es respuesta de la api que la parsea a json
      .then((recurso) => { // recurso es el json parsedo
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

  }

  function onClose(id) { //eliminar una card
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

//línea 33: Nav 'onSearch' hace ref al arg linea 6 archivo Nav.jsx
// mientras que Nac onSearch = 'onSearch' hace ref a fn linea 9 de este archivo App.js 
//parece q hace como un pasa mano. Del padre App se pasa a Nav, que a su vez pasa a onSearch
  return (
    <div className="App">
      <Nav onSearch = {onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

//key y value linea 51 y 53. En la 53 value onClose hace ref a fn linea 42