import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav"
import Login from "./Login";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <main className="container mx-auto h-screen grid place-items-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="search/" element={<Search />} />
          <Route path="weather/" element={<Weather />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
