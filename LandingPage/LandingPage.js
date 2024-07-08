import styles from './LandingPage.module.css';
import classNames from 'classnames';

function LandingPage() {
  return (
    <div>
      <h1>CAREER CONNECT</h1>
      <div className={classNames(styles['main-content'])}>
        <section className={classNames(styles.container)}>
          <div className={classNames(styles.content)}>
            <h2>Loren Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
            </p>
            <a href="#signUp">
              <button type="button">Sign up!</button>
            </a>
          </div>
          <img className={classNames(styles['img-CCLogo'])} src="career_connect_logo.png" alt="CC Logo" />
        </section>
        
        <section className={classNames(styles.container2)}>
          <div className={classNames(styles.content)}>
            <img className={classNames(styles.img2)} src="IMGblank.png" alt="Placeholder" />
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
            </p>
          </div>
          <div className={classNames(styles.content)}>
            <img className={classNames(styles.img3)} src="IMGblank.png" alt="Placeholder" />
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
            </p>
          </div>
          <div className={classNames(styles.content)}>
            <img className={classNames(styles.img4)} src="IMGblank.png" alt="Placeholder" />
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
            </p>
          </div>
        </section>
        
        <section className={classNames(styles.container3)}>
          <div className={classNames(styles.content)}>
            <h3>Loren Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
            </p>
          </div>
          <img className={classNames(styles.img5)} src="IMGblank.png" alt="Placeholder" />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
