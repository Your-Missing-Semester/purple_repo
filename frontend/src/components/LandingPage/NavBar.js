import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import classNames from 'classnames';

function NavBar() {
  return (
    <header>
      <div className={classNames(styles['nav-bar'])}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/sign-up">SIGN UP</Link></li>
          <li><Link to="/sign-in">LOG IN</Link></li>
          <li><Link to="/about-us">ABOUT US</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
