import './App.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import ResetPasswordForm from './resetPswd.js';
import ResetUsernameForm from './resetUsername.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/reset-username" element={<ResetUsernameForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
      </Routes>
    </Router> 
  );
}
