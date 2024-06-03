import styles from './auth.module.css';
import classNames from 'classnames';
//<img src={logo} className="App-logo" alt="logo" /> old logo
//<header className="App-header">
//        Hello
//      </header>
// 
function Signin() {
  return (
    <div className = {styles.auth}>
      <div className = {styles.main}>
        <div className = {styles.border}>
        <header className = {styles.app}>
                <a href="./"><img src="career_connect_logo.png" alt="logo" width ="200" hieght="200" /></a>
                <br />
                    Welcome back!
                <br />
            </header>
            <br />
            <header className = {styles.describeAuth}>Enter your login details below</header>
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
            <p className = {styles.authP}>Don't have an account yet? <a href="https://react.dev/learn" target="_blank" rel="noreferrer">SIGN UP</a></p>
            <button className={classNames(styles.accountButton, styles.app)}>LOGIN</button>
            <br/>
            <br/>
            <p className = {styles.line}><span>or login with</span></p>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img className = {styles.signUpOption} src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
            <a href="https://apple.com" target="_blank" rel="noreferrer"><img className = {styles.signUpOption} src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </div>
    </div>
  );
}

export default Signin;