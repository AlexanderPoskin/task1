import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import indexReducers from './reducers/indexReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json',
});

const store = createStore(
  indexReducers,
  composeEnhancer(applyMiddleware(axiosMiddleware(client)))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,

  document.getElementById('root')
);
