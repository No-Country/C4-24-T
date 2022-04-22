import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import GlobalStyle from '../src/styles/GlobalStyle'

Axios.defaults.baseURL = 'http://localhost:4000';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


