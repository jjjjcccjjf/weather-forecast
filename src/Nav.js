export default function Nav() {
    return <>
        <header>
            <nav>
                <ul className="absolute top-0 w-screen h-16 bg-pink-100 flex justify-between">
                    <li className="py-5 px-10">Weather Forecast</li>
                    <li className="py-5 px-10">Logout</li>
                </ul>
            </nav>
        </header>
    </>
}