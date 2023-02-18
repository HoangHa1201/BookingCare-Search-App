import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "../src/components/GlobalStyle/globalStyle"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyles>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalStyles>
);

