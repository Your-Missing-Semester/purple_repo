import './LandingPage.css';
import classNames from 'classnames';

function LandingPage() {
    return (
        <div>
            <header>
                <div className="navBar">
                    <a href="#home">HOME</a>
                    <a href="#signUp">SIGN UP</a>
                    <a href="#logIn">LOG IN</a>
                    <a href="#aboutUs">ABOUT US</a>
                </div>
            </header>
            <h1>CAREER CONNECT</h1>
            <div className="main-content">
                <section className="container">
                    <div className="content">
                        <h2>Loren Ipsum</h2>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                        <a href="#signUp">
                            <button type="button">Sign up!</button>
                        </a>
                    </div>
                    <img className="img1" src="career_connect_logo.png" alt="CC Logo" />
                </section>
                <section className="container2">
                    <div className="content">
                        <img className="img2" src="IMGblank.png" alt="Placeholder" />
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                    <div className="content">
                        <img className="img3" src="IMGblank.png" alt="Placeholder" />
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                    <div className="content">
                        <img className="img4" src="IMGblank.png" alt="Placeholder" />
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                </section>
                <section className="container3">
                    <div className="content">
                        <h3>Loren Ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, sed unum adversarium disputationi eu, aliquid conceptam mel ut. Vel modo nusquam ad, cu sea oratio legere ornatus. Quo ex ignota senserit, ei sea soluta fuisset. Sea ex impetus mediocrem intellegat. Sea ad enim nobis convenire, his brute velit ea, mel an clita reprimique.
                        </p>
                    </div>
                    <img className="img5" src="IMGblank.png" alt="Placeholder" />
                </section>
            </div>
            <footer>
                <p>Career Connect Team</p>
            </footer>
        </div>
    );
}

export default LandingPage;