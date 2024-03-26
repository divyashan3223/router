import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Context from "./components/Context";
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./components/User";
import Newbook from "./components/Newbook";
import Oldbook from "./components/Oldbook";
import Sign from "./components/Sign";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>this heading displayed all routes</h1>
        <ul className="ul-list">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/sign">sign</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/sign" element={<Sign />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
