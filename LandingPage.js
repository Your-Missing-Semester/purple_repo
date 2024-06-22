import styles from './LandingPage.module.css';
import classNames from 'classnames';

function LandingPage() {
    return (
        <div>
            <header>
                <div className={styles.navBar}>
                    <a href="#home">HOME</a>
                    <a href="#signUp">SIGN UP</a>
                    <a href="#logIn">LOG IN</a>
                    <a href="#aboutUs">ABOUT US</a>
                </div>
            </header>
            <h1>CAREER CONNECT</h1>
            <div className={styles.mainContent}>
                <section className={styles.container}>
                    <div className={styles.content}>
                        <h2>Loren Ipsum</h2>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                        <a href="#signUp">
                            <button type="button">Sign up!</button>
                        </a>
                    </div>
                    <img className={styles.img1} src="career_connect_logo.png" alt="CC Logo" />
                </section>
                <section className={styles.container2}>
                    <div className={styles.content}>
                        <img className={styles.img2} src="IMGblank.png" alt="Placeholder" />
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                    <div className={styles.content}>
                        <img className={styles.img3} src="IMGblank.png" alt="Placeholder" />
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                    <div className={styles.content}>
                        <img className={styles.img4} src="IMGblank.png" alt="Placeholder" />
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                </section>
                <section className={styles.container3}>
                    <div className={styles.content}>
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                    <img className={styles.img5} src="IMGblank.png" alt="Placeholder" />
                </section>
            </div>
            <footer>
                <p>Career Connect Team</p>
            </footer>
        </div>
    );
}

export default LandingPage;
