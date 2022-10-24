import { Link, useNavigate } from "react-router-dom"

export default function Search({ searchQuery, setSearchQuery, user }) {
    const navigate = useNavigate();

    return (
        <section className="grid grid-flow-row gap-6 place-content-center justify-items-center">
            <div><img className="rounded-full shadow-2xl" src={user.picture ?? null} height={200} width={200} alt="..." /></div>
            <div className="text-3xl font-extrabold">Welcome, {user.name ?? null}</div>
            <div className="text-xl tracking-widest">https://github.com/{user.nickname ?? null}</div>
            <div className="mt-8">
                <form onSubmit={e => {
                    e.preventDefault()
                    navigate("/weather-forecast")
                }} className="w-96 grid gap-6 grid-flow-row place-content-center place-items-center">
                    <label for="searchQuery" className="place-self-start text-medium font-sem">Begin by typing a location</label>
                    <input id="searchQuery" placeholder="Ex. Cardiff, Wales" className=" p-2 block h-12 w-[40rem] shadow-xl" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <Link className="rounded-3xl text-xl font-semibold bg-teal-400/80 hover:bg-black/80 hover:text-teal-400 hover:fill-teal-300 shadow-xl w-60 h-14 flex flex-row place-items-center place-content-center" to="/weather-forecast">Display Weather</Link>
                </form>
            </div>
        </section>
    )
}