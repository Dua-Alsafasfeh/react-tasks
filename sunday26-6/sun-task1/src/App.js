import React, { Component } from 'react';
import Contact from './Components/Contact/Contact';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div>
        {/* <Home />
        <Contact />
        <Signup /> */}
        <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png"
                                class="me-2"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                            <small>MDBootstrap</small>
                        </a>
                        <Link to="/Home">Home</Link>
                        <Link to="/Contact">Contact us</Link>
                        <Link to="/Signup">Sign up</Link>
                    </div>
                </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/Contact' element={<Contact />}>Contact</Route>
        <Route path='/Signup' element={<Signup />}>Signup</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
