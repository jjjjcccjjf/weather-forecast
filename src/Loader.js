export default function Loader() {
    return (
        <div className="grid grid-flow-row gap-2 place-items-center">
            <img className="animate-pulse" src="/loader.svg" alt="Loader"></img>
            <p className="text-xl font-bold animate-bounce">Loading... please wait</p>
        </div>
    )
}