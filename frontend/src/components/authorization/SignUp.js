import styles from './auth.module.css';
import classNames from 'classnames';
import axios from 'axios';
import {useState} from 'react';

function SignUp() {
  const [userEmail, setUserEmail] = useState ('');
  const [userPassword, setUserPassword] = useState ('');
  const [userConfPassword, setUserConfPassword] = useState ('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState(''); 
  const [errorConfPassword, setErrorConfPassword] = useState(''); 

  const handleSignUpSubmit = async (_event) => { 
    try{
      const response = await axios.post('/sign-up', {
        email: userEmail,
        password: userPassword,
        confPass: userConfPassword
      });  
      setErrorConfPassword('')
      setErrorEmail('')
      setErrorPassword('')
      /* TODO */
      alert("Successful signup! User dashboard in progress")
      window.location.href = '/';
    }catch(error){
      if(error.response.data === 'username or password are missing'){
        setErrorEmail('Invalid email')
        setErrorPassword('Password must be at least 8 characters long and contain uppercase, lowercase letters, and digits')
      }else if(error.response.data === 'passwords are not matching'){
        setErrorConfPassword('Passwords do not match')
      }else if(error.response.data === 'user already exists'){
        setErrorEmail('An account with this email adress already exists')
      }else if(error.response.data === 'password is not secure'){
        setErrorPassword('Password is not strong enough')
      }
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
  const confPassHandler = (event) => {
    const confPassVal = event.target.value
    setUserConfPassword(confPassVal)
  }

  // Eventually, going to add toggle method here.

  return (
    <div className = {styles.auth}>
      <div className = {styles.main}>
        <div className = {styles.border}>
          <a href="./"><img className = {styles.center} src="career_connect_logo.png" alt="logo" width ="200" hieght="200" /></a>
          <header className={classNames(styles.app, styles.mb20)}>
            Start connecting today!
          </header>
          <form action=''>
            <header className={classNames(styles["auth-type"], styles.mb20)}>
              Create an account</header>

            <label className={classNames(styles.subheaders, styles.mt20)}> 
              Email </label>

            <input className={classNames(styles["auth-input"])} placeholder="example@gmail.com" type = "text" onChange={emailHandler} />
            {errorEmail && <p className={classNames(styles["auth-error"], styles["sign-up-error"], styles.margin0)} >&#9888; {errorEmail}</p>}

            <label className={classNames(styles.subheaders, styles.mt20)}>
              Password</label>
            <input className={classNames(styles["auth-input"])} placeholder="Enter your password" type = 'text' onChange={passHandler} />
            {errorPassword && <p className={classNames(styles["auth-error"], styles["sign-up-error"], styles.margin0)} >&#9888; {errorPassword} </p>}
            <label className={classNames(styles.subheaders, styles.mt20)}>
              Confirm Password</label>
            <input className = {(styles["auth-input"])} placeholder="Confirm your password" type = "text" name="confirmedPassword" onChange={confPassHandler}/>
            {errorConfPassword && <p className={classNames(styles["auth-error"], styles["sign-up-error"])} >&#9888; {errorConfPassword}</p>}
          </form>
          <p className = {styles["auth-p"]}>Already have an account? <a href="./sign-in" target="_blank" rel="noreferrer">LOGIN</a></p>
          <button className={classNames(styles["acount-button"], styles.app, styles.mb20)} onClick={handleSignUpSubmit}>SIGN UP</button> 
          <p className = {styles.line}><span>or sign up with</span></p>
          <a href="https://google.com" target="_blank" rel="noreferrer"><img className = {styles["sign-up-option"]} src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
          <a href="https://apple.com" target="_blank" rel="noreferrer"><img className = {styles["sign-up-option"]} src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
