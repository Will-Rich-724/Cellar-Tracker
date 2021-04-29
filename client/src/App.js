import './App.css';
import logo from './logo.svg'
import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import LogIn from "./Views/LogIn";
import Register from "./Views/Register"

function App() {
  return (
    <div className="App">
      <Router>
        <LogIn path='/' />
        <Register path='/register' />
      </Router>
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </div>
  );
}

export default App;
