import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {AppContext} from './AppContext'




ReactDOM.render(
  <React.StrictMode>
      <AppContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);


