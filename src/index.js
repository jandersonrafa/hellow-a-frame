import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Scene from './js/Scene'
//import './css/style.css'
// Log message to console
// eslint-disable-next-line no-console
ReactDOM.render(
  <Scene />,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
// Needed for Hot Module Replacement
// eslint-disable-next-line no-undef
if(module.hot) {
  module.hot.accept() // eslint-disable-line no-undef  
}