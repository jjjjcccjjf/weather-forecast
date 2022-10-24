import { useAuth0 } from '@auth0/auth0-react';

function Wrapper({ children }) {

    const { isLoading, error, } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    return <>{children}</>;
}

function LoginButton() {
    const { isAuthenticated, loginWithRedirect, } = useAuth0();

    return !isAuthenticated && (
        <button onClick={loginWithRedirect}>Login</button>
    );
}

export default function Login() {

    return <>
        <div className="grid grid-flow-row place-content-center gap-4">
            <p>Welcome to the weather forecast web application. Pleasel login with your Github user to use the application and view weather in your city.</p>
            <Wrapper>
                <LoginButton></LoginButton>
            </Wrapper>
        </div>
    </>
}