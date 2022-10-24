import { useAuth0 } from "@auth0/auth0-react"
import { NavLink } from "react-router-dom"

function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <button onClick={() => {
            logout({ returnTo: "http://localhost:3000" });
        }}>Log out</button>
    );
}


export default function Nav() {

    const { isAuthenticated } = useAuth0()

    return <>
        <header>
            <nav>
                <ul className="absolute top-0 w-screen h-16 bg-pink-100 flex justify-between">
                    <li className="py-5 px-10"><NavLink to="/">Logo</NavLink></li>
                    {isAuthenticated && <>
                        <li className="py-5 px-10"><NavLink style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined} to="/search">Search</NavLink></li>
                        <li className="py-5 px-10"><NavLink style={({ isActive }) => isActive ? { fontWeight: "bold" } : undefined} to="/weather-forecast">Weather Forecast</NavLink></li>
                        <li className="py-5 px-10"><LogoutButton></LogoutButton></li>
                    </>}
                </ul>
            </nav>
        </header>
    </>
}