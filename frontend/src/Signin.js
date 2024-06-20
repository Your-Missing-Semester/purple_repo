import styles from './auth.module.css';
import classNames from 'classnames';
import axios from 'axios';
import {useState} from 'react';

function SignIn() {
  const [userEmail, setUserEmail] = useState (''); 
  const [userPassword, setUserPassword] = useState ('');

  const signIn = async (_event) => { // called when LOGIN button is clicked
    const response = await axios.post('/signin', {
      email: userEmail,
      password: userPassword,
    }); 
    console.log("sign in was successful for ", response.data)
  }
  const emailHandler = (event) => { 
    const emailVal = event.target.value 
    setUserEmail(emailVal) 
  }
  const passHandler = (event) => { 
    const passVal = event.target.value
    setUserPassword(passVal)
  }

  return (
    <div className = {styles.auth}>
      <div className = {styles.main}>
        <div className = {styles.border}>
          <a href="./"><img className = {styles.center} src="career_connect_logo.png" alt="logo" width ="200" hieght="200" /></a>
          <header className={classNames(styles.app, styles.mb20)}>
            Welcome back!
          </header>
            
          <form action="">
            <header className={classNames(styles.authType, styles.mb20)}>
              Enter your login details below</header>
              
            <label className={classNames(styles.subheaders, styles.mb20)}>
              Email</label>  
            <input className={classNames(styles.authInput, styles.mb20)} placeholder="example@gmail.com" type = "text" onChange={emailHandler}/>
              
            <label className={classNames(styles.subheaders, styles.mb20)}>
            Password</label>
            <input className={classNames(styles.authInput, styles.mb20)} placeholder="Enter your password" type = "text" onChange={passHandler}/>
          </form>
          <p className={classNames(styles.authP, styles.mb20)}>Don't have an account yet? <a href="./signup" target="_blank" rel="noreferrer">
            SIGN UP</a></p>
          <button className={classNames(styles.accountButton, styles.app, styles.mb20)} onClick={signIn}>LOGIN</button>
          <p className = {styles.line}><span>or login with</span></p>
          <a href="https://google.com" target="_blank" rel="noreferrer"><img className = {styles.signUpOption} src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
          <a href="https://apple.com" target="_blank" rel="noreferrer"><img className = {styles.signUpOption} src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;