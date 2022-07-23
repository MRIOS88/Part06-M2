const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar, asincrono } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('id');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let actualValue = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = actualValue;
}

// Ejecutamos la funcion 'renderContador':
  renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
  store.subscribe(renderContador); //tiene que pasar la def de una fn. Un callback.
  //otra forma store.subscribe(() = > renderContador())


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
  let btnIncrement = document.getElementById('incremento');
  let btnDecrement = document.getElementById('decremento');
  btnIncrement.onclick = () => store.dispatch(incremento()); //con arrow fn puedo pasar la def de una fn, porq en onclick no se puede ejecutar una función.
  btnDecrement.onclick = () => store.dispatch(decremento());
  // otra forma btnIncrement.onclick = function() {
  //   return store.dispatch(incremento());
  // }

  //Impar
  let btnImpar = document.getElementById('incrementoImpar');
  btnImpar.onclick = () => store.dispatch(impar());

  //Asincrónica
  let btnAsync = document.getElementById('incrementoAsync');
  btnAsync.onclick = () => setTimeout(store.dispatch(asincrono()), 1000); 

  // setTimeout recibe como parámetro una funcion que quiero que ejecute, y el tiempo de espera.
  // 1000 = 1 segundo