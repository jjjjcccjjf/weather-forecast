import { Link } from "react-router-dom"

export default function Search({ searchQuery, setSearchQuery, user }) {
    return (
        <section className="grid grid-flow-row">
            <div><img className="rounded-full" src={user.picture ?? null} alt="..." /></div>
            <div>{user.name ?? null}</div>
            <div>https://github.com/{user.nickname ?? null}</div>
            <div>
                <form >
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <Link to="/weather-forecast">Display Weather</Link>
                </form>
            </div>
        </section>
    )
}