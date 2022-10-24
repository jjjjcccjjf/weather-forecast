import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Loader from "./Loader"
import "./WeatherForecast.css"
import { useAuth0 } from "@auth0/auth0-react"

export default function WeatherForecast({ searchQuery }) {
    const [weather, setWeather] = useState({})
    // TODO: Store API key to environment variables!
    const key = "5c9d2b871d7e4476ad884441222410"
    const [isLoading, setIsLoading] = useState(false);

    // Force redirect for unauthenticated users
    // TODO: Refactor into Auth0 ProtectedRoutes. See (https://auth0.com/blog/complete-guide-to-react-user-authentication/#Protecting-Routes)
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth0()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
        }
    }, [])
    // end Force redirect for unauthenticated users

    useEffect(() => {
        if (searchQuery) {
            setIsLoading(true)
            // TODO: Refactor to SWR
            fetch("http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + searchQuery + "&aqi=no")
                .then(res => res.json())
                .then(res => {
                    if (!res.error) {
                        setWeather({ ...weather, ...res })
                    }
                })
                .catch(e => {
                    console.log(e.message)
                }).finally(() => {
                    setIsLoading(false)
                })
        }
    }, [searchQuery])

    const EmptyWeather = (
        <div className="text-4xl">No matching location found</div>
    )

    return (
        <section>
            {
                isLoading ?
                    <><Loader></Loader></> :
                    <>
                        {Object.keys(weather).length !== 0 ?
                            <div className="grid place-content-start">
                                {/* TODO: Add lazyloading */}
                                <img className="p-2 mb-6 place-self-end shadow-lg border border-teal-900 rounded-full" src={weather.current.condition.icon ?? null} alt="..."></img>
                                <table className="table-auto border-collapse border border-slate-500 w-[50rem]">
                                    <thead>
                                        <tr className="bg-blue-700/10" >
                                            <th className="text-left" colSpan={5}>Date</th>
                                        </tr>
                                        <tr className="bg-blue-700/30">
                                            <th className="text-left">(mm/dd/yyyy)</th>
                                            <th className="text-left">Temp(F)</th>
                                            <th className="sm:hidden xl:table-cell text-left">Description</th>
                                            <th className="sm:hidden xl:table-cell text-left">Pressure</th>
                                            <th className="sm:hidden xl:table-cell text-left">Humidity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-blue-700/50">
                                            <td>{weather.location.localtime ? (new Date(weather.location.localtime)).toLocaleDateString('en-US') : null}</td>
                                            <td>{weather.current.temp_f ?? null}</td>
                                            <td className="sm:hidden xl:table-cell">{weather.current.condition.text ?? null}</td>
                                            <td className="sm:hidden xl:table-cell">{weather.current.pressure_mb ?? null}</td>
                                            <td className="sm:hidden xl:table-cell">{weather.current.humidity ?? null}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="grid grid-flow-col justify-between">

                                    <Link to="/search" className="mt-8 rounded-3xl text-xl font-semibold bg-teal-400/80 hover:bg-black/80 hover:text-teal-400 hover:fill-teal-300 shadow-xl w-40 h-14 flex flex-row place-items-center place-content-center">Back</Link>
                                    <p className="mt-8 rounded-3xl text-xl flex flex-row place-self-center tracking-wide">Searching weather of&nbsp;<span className="capitalize font-extrabold">{searchQuery}</span></p>
                                </div>
                            </div> : EmptyWeather}
                    </>
            }

        </section>
    )

}