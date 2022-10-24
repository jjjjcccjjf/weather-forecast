import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Nav from "./Nav"
import Login from "./Login";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";

// const ProtectedRoute = (props) => {
//   const Component = withAuthenticationRequired(props.component, ...props.args);
//   return <Component {...props.rest} />;
// };


function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const { user } = useAuth0();

  const searchArgs = { searchQuery, setSearchQuery, user }
  const weatherArgs = { searchQuery }

  return (
    <>

      <Nav></Nav>
      <main className="container mx-auto h-screen grid place-items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="search/" element={<ProtectedRoute component={Search} rest={searchArgs} />} />
          <Route path="weather-forecast/" element={<ProtectedRoute rest={weatherArgs} component={WeatherForecast} />} /> */}
          <Route path="search/" element={<Search {...searchArgs} />} />
          <Route path="weather-forecast/" element={<WeatherForecast {...weatherArgs} />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
