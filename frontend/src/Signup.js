import styles from './auth.module.css';
import classNames from 'classnames';
// Sign up page
function Signup() {
  return (
    <div className = {styles.auth}>
      
      <main className = {styles.main}>
        <div className = {styles.border}>
            <header className = {styles.app}>
                <a href="./"><img src="career_connect_logo.png" alt="logo" width ="200" hieght="200" /></a>
                <br />
                    Start connecting today!
                <br />
            </header>
            <br />
            <header className = {styles.describeAuth}>Create an account</header>
            <br/>
            <item className = {styles.subheaders}>
                Email
            </item>
            <br/>
            <input className = {styles.authInput} placeholder="example@gmail.com" type = "text" id="email" name="email" />
            <br/>
            <br/>
            
            <item className = {styles.subheaders}>
                Password
            </item>
            <br/>
            <input className = {styles.authInput} placeholder="Enter your password" type = "text" id="email" name="email" />
            <br/>
            <br/>
            <item className = {styles.subheaders}>
                Confirm Password
            </item>
            <br/>
            <input className = {styles.authInput} placeholder="Confirm your password" type = "text" id="email" name="email" />
            <p className = {styles.authP}>Already have an account? <a href="https://react.dev/learn" target="_blank" rel="noreferrer">LOGIN</a></p>
            <button className={classNames(styles.accountButton, styles.app)}>SIGN UP</button>
            <br/>
            <br/>
            <p className = {styles.line}><span>or sign up with</span></p>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className = {styles.signUpOption} src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
            <a href="https://apple.com" target="_blank" rel="noreferrer"><img className = {styles.signUpOption} src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </main>
    
    </div>
  );
}

export default Signup;