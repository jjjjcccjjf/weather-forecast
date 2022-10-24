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
            <nav className="shadow-xl">
                <ul className="absolute top-0 w-screen h-20border-b border-cyan-400/40 shadow-lg flex justify-around">
                    <li className="py-2"><NavLink to="/" className=" flex "><img className="object-scale-down" src="/logo.png" width={60} height={60} alt="..."></img><p className="text-2xl sm:hidden xl:grid px-2 place-content-center grid font-bold tracking-wide">WEATHER FORECAST APP</p></NavLink></li>
                    {isAuthenticated && <>
                        <li className="py-7  text-lg"><NavLink style={({ isActive }) => isActive ? { fontWeight: "900" } : undefined} to="/search">Search</NavLink></li>
                        <li className="py-7  text-lg"><NavLink style={({ isActive }) => isActive ? { fontWeight: "900" } : undefined} to="/weather-forecast">Weather Forecast</NavLink></li>
                        <li className="py-7  text-lg"><LogoutButton></LogoutButton></li>
                    </>}
                </ul>
            </nav>
        </header>
    </>
}