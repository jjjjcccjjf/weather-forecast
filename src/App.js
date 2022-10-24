import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav"
import Login from "./Login";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>

      <Nav></Nav>
      <main className="container mx-auto h-screen grid place-items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="search/" element={<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path="weather-forecast/" element={<WeatherForecast searchQuery={searchQuery} />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
