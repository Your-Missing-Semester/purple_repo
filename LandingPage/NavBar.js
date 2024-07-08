import styles from './LandingPage.module.css';
import classNames from 'classnames';

function NavBar() {
  return (
    <header>
      <div className={classNames(styles['nav-bar'])}>
        <ul>
          <a href="#home">HOME</a>
          <a href="#signUp">SIGN UP</a>
          <a href="#logIn">LOG IN</a>
          <a href="#aboutUs">ABOUT US</a>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
