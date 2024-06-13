import './App.css';
import {Route, Routes} from "react-router-dom";
import ResetPasswordForm from './resetPswd.js';
import ResetUsernameForm from './resetUsername.js';
import FormPage from './formPage.js';

import Signup from './Signup.js';  
import Signin from './Signin.js';

export default function App(){
  return (
    <>
    <Routes>
      <Route path = "/" element = {<FormPage/>}></Route>
      <Route path = "/sign-up" element = {<Signup/>} ></Route>
      <Route path = "/sign-in" element = {<Signin/>} ></Route>
      <Route path = "/reset-username-form" element = {<ResetUsernameForm/>} ></Route>
      <Route path = "/reset-password-form" element = {<ResetPasswordForm/>} ></Route>
    </Routes>
    </>
  );
}

