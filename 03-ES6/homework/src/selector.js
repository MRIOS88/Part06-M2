const TemplateGlob = require("@11ty/eleventy/src/TemplateGlob");

var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) { //tag.children son los hijos del tag.
    let child = startEl.children[i];
    let collectedElements = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...collectedElements];//spread -->crea una copia y concatena los 2 arrays.
  }
  return resultSet;
};
// REPASAR ESTE EN ALGUN MOMENTO.

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí  //el string se puede acceder con posiciones como el array
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length === 2) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
   matchFunction = element => '#' + element.id === selector;//porq element.id=idOne, pero selector=#idOne  --> idOne != #idOne
  } else if (selectorType === "class") {
    matchFunction = element => {
      let classes = element.classList;//los elementosHTML pueden tener mas de una clase.classList devuelve un array con las clases de ese elementoHTML. EJ. [clase1, clase2, clase3]
      for (let i = 0; i < classes.length; i++) {
        if('.' + classes[i] === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = element => {
      let [t, c] = selector.split('.');//destructuring [t, c] = ['div', 'classOne']
      //var funcion =matchFunctionMaker(t); --> esta funcion retorna la fn matchFunction, q a su vez debe recibir como argumento un elemento.
      //function (element); --> por eso fn recibe un elemento p/poder ejecutar matchFunction. -->element es el arg de matchFuntion, que a su vez es el arg de matchFunctionMaker. Así sería la recursión "inversa, al volver".
      return matchFunctionMaker(t)(element) && matchFunctionMaker('.' + c)(element);
    }
  } else if (selectorType === "tag") {
    matchFunction = element => element.tagName === selector.toUpperCase();//tagName devuelve la etiqueta HTML en mayus --> DIV === div ; por eso de usa toupperCase() para que quede DIV === DIV 
  }//fijarse q en linea 63, matchFunction esta definida pero NO EJECUTADA, por eso devuelve la función sin ejecutar.
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


//document.querySelectorAll('#idOne'); -->está bsucando todos los HTML q tengan un ID='idOne'