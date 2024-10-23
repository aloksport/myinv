import logo from './logo.svg';
import './App.css';

import {Routes, Route, HashRouter,Link } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import NoPage from "./components/NoPage";
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <HashRouter>
      <nav>
          <ul>
              <li>
                  <Link to="/Register">Register</Link>
              </li>
              <li>
                  <Link to="/NoPage">NoPage</Link>
              </li>
              <li>
                  <Link to="/Dashboard">Dashboard</Link>
              </li>
          </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/NoPage" element={<NoPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
