import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function WeatherForecast({ searchQuery }) {
    const [weather, setWeather] = useState({})
    const key = "5c9d2b871d7e4476ad884441222410"

    useEffect(() => {
        if (searchQuery) {
            fetch("http://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + searchQuery + "&aqi=no")
                .then(res => res.json())
                .then(res => {
                    if (!res.error) {
                        setWeather({ ...weather, ...res })
                    }
                })
                .catch(e => console.log(e.message))
        }
    }, [searchQuery])

    const EmptyWeather = (
        <div>No matching location found</div>
    )

    return (
        <section>

            <div>{Object.keys(weather).length !== 0 ?
                <div>
                    <img src={weather.current.condition.icon ?? null} alt="..."></img>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="">Date</th>
                            </tr>
                            <tr>
                                <th className="">(mm/dd/yyyy)</th>
                                <th className="">Temp(F)</th>
                                <th className="">Description</th>
                                <th className="">Pressure</th>
                                <th className="">Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{weather.location.localtime ?? null}</td>
                                <td>{weather.current.temp_f ?? null}</td>
                                <td>{weather.current.condition.text ?? null}</td>
                                <td>{weather.current.pressure_mb ?? null}</td>
                                <td>{weather.current.humidity ?? null}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/search">Back</Link>
                </div> : EmptyWeather}</div>
        </section>
    )


}