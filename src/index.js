import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from "./config";

// This is a wrapper for the Auth0Provider to ensure history pushing in our app
const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback {...providerConfig}
      >
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
