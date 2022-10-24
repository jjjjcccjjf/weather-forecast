import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "./Nav"
import Login from "./Login";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import "./App.css"

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
    <div className=" font-serif">
      <Nav></Nav>
      <main className="h-screen grid place-items-center bg-fixed" style={{"backgroundImage": "url('/bg.jpg')"}}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="search/" element={<ProtectedRoute component={Search} rest={searchArgs} />} />
          <Route path="weather-forecast/" element={<ProtectedRoute rest={weatherArgs} component={WeatherForecast} />} /> */}
          <Route path="search/" element={<Search {...searchArgs} />} />
          <Route path="weather-forecast/" element={<WeatherForecast {...weatherArgs} />} />
          <Route path="*" element={<div className="text-6xl">404</div>}/>
        </Routes>
      </main>

    </div>
  );
}

export default App;
