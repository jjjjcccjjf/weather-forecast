import { Link, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react";

export default function Search({ searchQuery, setSearchQuery, user }) {

    // Force redirect for unauthenticated users
    // TODO: Refactor into Auth0 ProtectedRoutes. See (https://auth0.com/blog/complete-guide-to-react-user-authentication/#Protecting-Routes)
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0()
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
        }
    }, [])
    // end Force redirect for unauthenticated users

    return (
        <section className="grid grid-flow-row gap-6 place-content-center justify-items-center">
            <div className="sm:hidden xl:block"><img className="rounded-full shadow-2xl" src={user ? user.picture : null} height={200} width={200} alt="User" /></div>
            <div className="sm:hidden xl:block text-3xl font-extrabold">Welcome, {user ? user.name : null}</div>
            <div className="sm:hidden xl:block text-xl tracking-widest">https://github.com/{user ? user.nickname : null}</div>
            <div className="mt-8">
                <form onSubmit={e => {
                    // Imitate a FormSubmit() by redirecting the user to the WeatherForecast page on Form Submit
                    e.preventDefault()
                    navigate("/weather-forecast")
                }} className="w-96 grid gap-6 grid-flow-row place-content-center place-items-center">
                    <label htmlFor="searchQuery" className="place-self-start text-medium font-sem">Begin by typing a location</label>
                    <input id="searchQuery" placeholder="Ex. Cardiff, Wales" className=" p-2 block h-12 w-[40rem] shadow-xl" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <Link className="rounded-3xl text-xl font-semibold bg-teal-400/80 hover:bg-black/80 hover:text-teal-400 hover:fill-teal-300 shadow-xl w-60 h-14 flex flex-row place-items-center place-content-center" to="/weather-forecast">Display Weather</Link>
                </form>
            </div>
        </section>
    )
}