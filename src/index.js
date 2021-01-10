import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
reportWebVitals();
