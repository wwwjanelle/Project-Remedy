import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home/Homepage';
import Provider from "./pages/Provider/Provider";
import LogIn from "./pages/Provider/LogIn";
import SignUp from "./pages/Provider/SignUp";
import Patient from "./pages/Patient/Patient";
import Login from "./pages/Patient/Login";
import Signup from "./pages/Patient/Signup";
import Survey from "./pages/Other/Survey";
import ForgetPassword from "./pages/Other/ForgetPassword";
import Dashboard from './pages/Other/Dashboard';
import ProviderMainPage from './pages/Secure/ProviderMainPage';
import PatientMainPage from './pages/Secure/PatientMainPage';
import image from "../src/img/Remedy-1.jpeg";
import SheetData from './pages/Secure/SendSurvey';

function App() {
  return ( 
    <Router>
      <div className="App">
        <nav className= "navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
            <img border = "0" src={image} alt="Remedy" width="64" height="64"/>
            </Link>
            <div className="collaspe navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              </ul>
            </div>
          </div>
        </nav>
      
      <div className='outer'>
        <div className='inner'>
          <Routes>
            <Route exact path='/' element={<HomePage />} /> 
            <Route path='/provider' element={<Provider />} />
            <Route path='/provider/login' element={<LogIn />} />
            <Route path='/provider/signup' element={<SignUp />} />
            <Route path='/provider/secure' element={<ProviderMainPage />} />
            <Route path='/provider/secure/sendsurvey' element={<SheetData />} />
            <Route path='/patient' element={<Patient />} /> 
            <Route path='/patient/login' element={<Login />} />
            <Route path='/patient/signup' element={<Signup />} />
            <Route path='/patient/secure' element={<PatientMainPage />} />
            <Route path='/survey' element={<Survey />} /> 
            <Route path='/forgot-password' element={<ForgetPassword />} /> 
            <Route path='/dashboard' element={<Dashboard />} /> 
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", color: "red" }}>
                  <h1>404 Error Not Found</h1>
                  <h2>Invalid Page</h2>
                </div>
              }></Route>
          </Routes>
        </div>
      </div>
    </div> 
  </Router>
    
  );
}

export default App;
