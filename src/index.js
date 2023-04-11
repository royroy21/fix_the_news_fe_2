import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TODO - Material UI throws "Warning: findDOMNode is deprecated in StrictMode.
//  findDOMNode was passed an instance of LoadingSpinner which is inside
//  StrictMode. Instead, add a ref directly to the element you want to
//  reference. Learn more about using refs safely here:
//  https://fb.me/react-strict-mode-find-node".
//  I'm turning off StrictMode for now
// With StrictMode
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
