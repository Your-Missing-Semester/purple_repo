import styles from './auth.module.css';
import classNames from 'classnames';
import axios from 'axios';
import {useState} from 'react';

function SignIn() {
  
  const [userEmail, setUserEmail] = useState (''); 
  const [userPassword, setUserPassword] = useState ('');
  const [error, setError] = useState('');

  const handleSignInSubmit = async (_event) => { 
    try{
      const response = await axios.post('/sign-in', {
        email: userEmail,
        password: userPassword,
      }); 
      alert("Successful login! User dashboard in progress")
      setError('');
      window.location.href = '/';
    }catch(error){
      setError('Invalid email or password, please try again')
    }
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
            <header className={classNames(styles["auth-type"], styles.mb20)}>
              Enter your login details below</header>
              
            <label className={classNames(styles.subheaders, styles.mb20)}>
              Email</label>  
            <input className={classNames(styles["auth-input"], styles.mb20)} placeholder="example@gmail.com" type = "text" onChange={emailHandler}/>
              
            <label className={classNames(styles.subheaders, styles.mb20)}>
            Password</label>
            <input className={classNames(styles["auth-input"])} placeholder="Enter your password" type = "password" onChange={passHandler}/>
            <p className={classNames(styles["auth-p"], styles.right)}><a href="./reset-password-form" >Forgot Password?</a></p>
            {error && <p className={classNames(styles["auth-error"])} >&#9888; {error}</p>}
          </form>
          <button className={classNames(styles["acount-button"], styles.app)} onClick={handleSignInSubmit}>LOGIN</button>
          <p className={classNames(styles["auth-p"], styles.mb20)}>Don't have an account yet? <a href="./sign-up" target="_blank" rel="noreferrer">
            SIGN UP</a></p>
          <p className = {styles.line}><span>or login with</span></p>
          <a href="https://google.com" target="_blank" rel="noreferrer"><img className = {styles["sign-up-option"]} src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
          <a href="https://apple.com" target="_blank" rel="noreferrer"><img className = {styles["sign-up-option"]} src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
