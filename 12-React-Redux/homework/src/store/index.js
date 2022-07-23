import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//extension dev tools redux*/
    composeWithDevTools(applyMiddleware(thunk)),//hacer acciones asincrónicas en Redux
  );
  
  export default store;