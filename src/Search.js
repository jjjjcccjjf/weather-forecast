import { Link } from "react-router-dom"

export default function Search({ searchQuery, setSearchQuery }) {
    return (
        <section className="grid grid-flow-row">
            <div><img className="rounded-full" src="https://place-hold.it/200x200" alt="..." /></div>
            <div>John Smith</div>
            <div>
                <form >
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <Link to="/weather-forecast">Display Weather</Link>
                </form>
            </div>
        </section>
    )
}