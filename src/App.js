import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Context from "./components/Context";
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./components/User";

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
          <li>
            <Link to="/user">user</Link>
          </li>
          <li>
            <Link to="/user/1">user1</Link>
          </li>
          <li>
            <Link to="/user/2">user2</Link>
          </li>
          <li>
            <Link to="/user/3">user3</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/context" element={<Context />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
