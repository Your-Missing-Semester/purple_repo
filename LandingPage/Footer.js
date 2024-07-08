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
              <li><a href="#aboutUs">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className={classNames(styles['social-icons'])}>
            <a href="#" className={classNames(styles['icon-facebook'])}></a>
            <a href="#" className={classNames(styles['icon-twitter'])}></a>
            <a href="#" className={classNames(styles['icon-instagram'])}></a>
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
