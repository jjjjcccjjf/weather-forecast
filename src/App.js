import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./Nav"
import Login from "./Login";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const { user } = useAuth0();
  
  return (
    <>

      <Nav></Nav>
      <main className="container mx-auto h-screen grid place-items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="search/" element={<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} user={user}/>} />
          <Route path="weather-forecast/" element={<WeatherForecast searchQuery={searchQuery} />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
