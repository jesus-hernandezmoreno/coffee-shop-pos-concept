// store.js
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
/* Modules*/
import products from './modules/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  products
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
