import './auth.module.css';
//<img src={logo} className="App-logo" alt="logo" /> old logo
//<header className="App-header">
//        Hello
//      </header>
// 
function Signin() {
  return (
    <div className="Signup">
      <div className="main">
        <div className="border">
        <header className="App">
                <a href="./"><img src="career_connect_logo.png" alt="logo" width ="200" hieght="200" /></a>
                <br />
                    Welcome back!
                <br />
            </header>
            <br />
            <header className='App2'>Enter your login details below</header>
            <br/>
            <item className = "subheaders">
                Email
            </item>
            <br/>
            <input className= "" placeholder="example@gmail.com" type = "text" id="email" name="email" />
            <br/>
            <br/>
            
            <item className = "subheaders">
                Password
            </item>
            <br/>
            <input className= "" placeholder="Enter your password" type = "text" id="email" name="email" />
            <br/>
            <p>Don't have an account yet? <a href="https://react.dev/learn" target="_blank" rel="noreferrer">SIGN UP</a></p>
            <button class="accountButton App">LOGIN</button>
            <br/>
            <br/>
            <p class="line"><span>or login with</span></p>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img class="sign_up_option" src="google_symbol.png" alt="google" width ="10%" hieght="10%"/></a>
            <a href="https://apple.com" target="_blank" rel="noreferrer"><img class="sign_up_option" src="apple_symbol.png" alt="apple" width ="10%" hieght="10%"/></a>
        </div>
      </div>
    </div>
  );
}

export default Signin;