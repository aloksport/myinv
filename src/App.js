//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Routes, Route, HashRouter,Link } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import NoPage from "./components/NoPage";
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ForgetPassword from './components/ForgetPassword';
import ItemRequest from './components/ItemRequest';
import UserProfile from './components/UserProfile';
import Layout from './components/Layout';
import Protect from './components/Protect';
function App() {
  const [isAuthenticated, setIsAuthenticated] =  useState(false);
  /*
    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };*/
  return (
    <HashRouter>
      {/*<nav>
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
      </nav>*/}
      
     <Routes> 
        <Route path="/" element={<Login />} />     
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route element={<Protect isAuthenticated ={isAuthenticated} />}>
              <Route path="/" element={<Layout />} >            
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/NoPage" element={<NoPage />} />
                <Route path="/ItemRequest" element={<ItemRequest />} />
                <Route path="/Profile" element={<UserProfile />} />
              </Route>
          </Route>
      </Routes>

 {/*
      <Routes>
                <Route element={<Protect isAuthenticated
                                        ={isAuthenticated} />} >
                    <Route path="Dashboard" 
                           element={<Dashboard logout
                                     ={logout} />} />

                </Route>

                <Route path="/" 
                       element={<Login login
                                 ={login} />} />

            </Routes>*/}
    </HashRouter>
  );
}
export default App;
