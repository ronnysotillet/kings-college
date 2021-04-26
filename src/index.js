import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './global.css';
import App from './components/App';
const container = document.getElementById('root');

ReactDOM.render(
  (<React.StrictMode>
    <App />
  </React.StrictMode>),
  container
);
