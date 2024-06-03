import styles from './auth.module.css';
import classNames from 'classnames';
// Sign up page
function Signup() {
  return (
    <div className = {styles.Signup}>
      
      <main className = {styles.main}>
        <div className = {styles.border}>
            <header className = {styles.App}>
                <a href="./"><img src="career_connect_logo.png" alt="logo" width ="200" hieght="200" /></a>
                <br />
                    Start connecting today!
                <br />
            </header>
            <br />
            <header className = {styles.App2}>Create an account</header>
            <br/>
            <item className = {styles.subheaders}>
                Email
            </item>
            <br/>
            <input placeholder="example@gmail.com" type = "text" id="email" name="email" />
            <br/>
            <br/>
            
            <item className = {styles.subheaders}>
                Password
            </item>
            <br/>
            <input placeholder="Enter your password" type = "text" id="email" name="email" />
            <br/>
            <br/>
            <item className = {styles.subheaders}>
                Confirm Password
            </item>
            <br/>
            <input placeholder="Confirm your password" type = "text" id="email" name="email" />
            <p>Already have an account? <a href="https://react.dev/learn" target="_blank" rel="noreferrer">LOGIN</a></p>
            <button className={classNames(styles.accountButton, styles.App)}>SIGN UP</button>
            <br/>
            <br/>
            <p className = {styles.line}><span>or sign up with</span></p>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className = {styles.sign_up_option} src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
            <a href="https://apple.com" target="_blank" rel="noreferrer"><img className = {styles.sign_up_option} src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </main>
    
    </div>
  );
}

export default Signup;