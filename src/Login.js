import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

// Boilerplate code from Auth0 quickstart
function Wrapper({ children }) {

    const { isLoading, error, } = useAuth0();
    if (isLoading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    return <>{children}</>;
}

// end Boilerplate code from Auth0 quickstart

function LoginButton({ className }) {
    const { isAuthenticated, loginWithRedirect, } = useAuth0();

    // Boilerplate code modified for styles
    // TODO: make a separate generic button component 
    return !isAuthenticated && (
        <button onClick={loginWithRedirect} className={className}>Log In with GitHub<svg className="mx-3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></button>
    );
}

// end Boilerplate code from Auth0 quickstart

export default function Login() {
    const { isAuthenticated } = useAuth0();

    return <>
        <div className="grid grid-flow-row gap-10 place-items-center py-40">
            <div className="mx-44 grid gap-10">
                <p className="text-5xl font-medium">Welcome to the <span className="font-extrabold">Weather Forecast</span> web application.</p>
                {!isAuthenticated && <p className="text-2xl">Please login with your GitHub user to use the application and view weather in your city. ⛅</p>}
                {isAuthenticated && <p className="text-2xl underline"><Link to="/search">Check out the weather in your city &raquo;</Link></p>}
            </div>
            <Wrapper>
                <LoginButton className="rounded-3xl text-xl font-semibold bg-teal-400/80 hover:bg-black/80 hover:text-teal-400 hover:fill-teal-300 shadow-xl w-80 h-14 flex flex-row place-items-center place-content-center"></LoginButton>
            </Wrapper>
        </div>
    </>
}