import './App.css';
import SignIn from './Signin';
import SignUp from './Signup';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/sign-up" element = {<SignUp/>} ></Route>
      <Route path = "/sign-in" element = {<SignIn/>} ></Route>
    </Routes>
    </>
  );
}

export default App;
