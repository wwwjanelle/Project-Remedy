import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import HomePage from './components/homepage.component';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className= "navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Remedy
            </Link>
            <div className="collaspe navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home-page'}>
                  Home Page 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      <div className='outer'>
        <div className='inner'>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/home-page' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div> 
  </Router>
    
  );
}

export default App;
