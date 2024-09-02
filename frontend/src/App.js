import './App.css';
import { Route, Routes } from 'react-router-dom';
import ResetPasswordForm from './resetPswd.js';
import ResetUsernameForm from './resetUsername.js';
import FormPage from './formPage.js';

import Signup from './components/authorization/SignUp.js';  
import Signin from './components/authorization/SignIn.js';


import NavBar from './components/LandingPage/NavBar.js'; 
import Footer from './components/LandingPage/Footer.js'; 
import LandingPage from './components/LandingPage/LandingPage.js'; 
import './components/LandingPage/LandingPage.module.css'; 
import HomePage from './components/homePage/homePage.js';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/reset-username-form" element={<ResetUsernameForm />} />
        <Route path="/reset-password-form" element={<ResetPasswordForm />} />
        <Route path = "/home" element = {<HomePage/>} />
      </Routes>
      <Footer />
    </>
  );
}
