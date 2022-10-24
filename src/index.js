import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Auth0ProviderWithHistory> */}
      <Auth0Provider
        domain="dev-rrl8ahvcv4tyav0p.us.auth0.com"
        clientId="xQr1Zc5jCTlHcwiwSa1X0CTiu1ooIDaP"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      {/* </Auth0ProviderWithHistory> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
