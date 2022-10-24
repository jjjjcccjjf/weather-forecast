import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav"
import Login from "./Login";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="search/" element={<Search />} />
        <Route path="weather/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
