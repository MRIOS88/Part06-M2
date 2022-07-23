import React from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código    //el webpack me permite poner los mismos nombres de clases porq crea un Id unico de manera automatica (lo hace con un hash)
  return (
    <div className={style.Container}>
      <input type='text' placeHolder='Ciudad...' />
      <button className={`btn ${style.btnSearchBar}`} onClick={() => props.onSearch('Buscando...')}>Agregar</button>
    </div>
  )
};
//() => props.onSearch('Buscando...') = 
// var prueba = function () {
//   props.onSearch('Buscando...')
//}
// onClick={prueba}


/* <SearchBar
onSearch={(ciudad) => alert(ciudad)}
/> */
/*en la linea 9 como en el index ya está vinculado link a bootstrap, puedo traer cosas de ahí.
En la líea 9 adoptan el estilo de bootstrap y el que definí en SearchBar.module.css, que a su vez
lo copié manual con inspeccionar de la página de bootstrap*/