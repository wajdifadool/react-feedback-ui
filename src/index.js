import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// we insert to the root div in the public/index.jsx

// this is what we want to enter
// we add the root component that called app
// 1st is waht to  componnent to insert
// 2nd args is where we want to insert the commponent
// (could be classes or functions) . {we use hooks that is functional component}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// we have something called strict mode

// syntactic sugar
