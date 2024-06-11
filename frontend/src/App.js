import './App.css';
import {Route, Routes} from "react-router-dom";
import ResetPasswordForm from './resetPswd.js';
import ResetUsernameForm from './resetUsername.js';
import FormPage from './formPage.js';


function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<FormPage/>}></Route>
      <Route path = "/reset-username-form" element = {<ResetUsernameForm/>} ></Route>
      <Route path = "/reset-password-form" element = {<ResetPasswordForm/>} ></Route>
    </Routes>
    </>
  );
}

export default App;
