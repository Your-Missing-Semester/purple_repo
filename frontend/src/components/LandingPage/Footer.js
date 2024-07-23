import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import classNames from 'classnames';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles['footer-content'])}>
        <div className={classNames(styles['footer-left'])}>
          <img className={classNames(styles['smaller-CCLogo'])} src="career_connect_logo.png" alt="CC Logo" />
          <h4>Career Connect</h4>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={classNames(styles['footer-right'])}>
          <nav>
            <ul className={classNames(styles['footer-links'])}>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/sign-up">Sign Up</Link></li>
            </ul>
          </nav>
          <div className={classNames(styles['social-icons'])}>
            <a href="https://www.linkedin.com/" className={classNames(styles['icon-linkedin'])}>
              <img src="./linkedin-logo.png" alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/?lang=en" className={classNames(styles['icon-twitter'])}>
              <img src="./x-twitter-logo.png" alt="X (prev. Twitter)"/>
            </a>
           <a href="https://www.instagram.com/" className={classNames(styles['icon-instagram'])}>
              <img src="./instagram-logo.png" alt="Instagram"/>
            </a>
          </div>
          <p className={classNames(styles['footer-slogan'])}>Start Connecting Today!</p>
          <div className={classNames(styles['contact-info'])}>
            <p>Business Inquiries: info@careerconnect.com</p>
            <p>Customer Support: support@careerconnect.com</p>
          </div>
        </div>
      </div>
      <div className={classNames(styles['footer-bottom'])}>
        <p>&copy; Career Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
