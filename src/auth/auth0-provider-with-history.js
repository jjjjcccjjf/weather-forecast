// src/auth/auth0-provider-with-history.js

import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {

    const domain = "dev-rrl8ahvcv4tyav0p.us.auth0.com"
    const clientId = "xQr1Zc5jCTlHcwiwSa1X0CTiu1ooIDaP"

    const history = useNavigate();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            // redirectUri={window.location.origin}
            redirectUri="https://localhost:3000"
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;