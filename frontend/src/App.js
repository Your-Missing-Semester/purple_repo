import './App.css';
import SignIn from './components/authorization/SignIn.js';
import SignUp from './components/authorization/SignUp.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router> 
  );
}
