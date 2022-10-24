import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
export default function Nav() {

    const { user } = useAuth0()

    return <>
        <header>
            <nav>
                <ul className="absolute top-0 w-screen h-16 bg-pink-100 flex justify-between">
                    <li className="py-5 px-10"><Link to="/">Logo</Link></li>
                    <li className="py-5 px-10"><Link to="/">Home</Link></li>
                    <li className="py-5 px-10"><Link to="/search">Search</Link></li>
                    <li className="py-5 px-10"><Link to="/weather-forecast">Weather Forecast</Link></li>
                    <li className="py-5 px-10">Logout</li>
                </ul>
            </nav>
        </header>
    </>
}