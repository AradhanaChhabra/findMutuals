import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './store/appContext';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>

  ,
  document.getElementById('root')
);
