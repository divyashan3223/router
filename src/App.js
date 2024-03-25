import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Context from "./components/Context";
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/context">context</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/context" element={<Context />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
