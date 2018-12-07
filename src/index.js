import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clase from './Clase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

//hot module replacement
if(module.hot){
  module.hot.accept();
}

registerServiceWorker();
