import React from 'react';
import FirstSlider from './static/bici1.jpg';
import SecondSlider from './static/bici2.jpg';

const App = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="./">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="./#carousel">Carrusel</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./#cards">Cards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./#forms">Formulario</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FirstSlider} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={SecondSlider} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="bg-danger py-5" id="cards">

                <div className="container">
                    <h1 className="text-light text-center">Cards</h1>
                    <div className="row justify-content-center">



                        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">

                            <div className="card">
                                <img src="https://picsum.photos/id/237/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-danger btn-block">Go somewhere</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 col-lg-4">

                            <div className="card">
                                <img src="https://picsum.photos/id/237/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 col-lg-4">

                            <div className="card">
                                <img src="https://picsum.photos/id/237/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="container my-5" id="forms">
                <div className="row">
                    <div className="col-12 col-lg-6 text-right d-none d-lg-flex align-items-center">
                        <div>
                            <h1>Contactanos</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet ducimus a commodi, vel ullam soluta dolor nisi minima sequi.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h4>Formulario</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>

            <footer className="bg-danger" id="footer">

                <div className="container">

                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>

                    <div className="row">
                        <p className="text-center w-100 text-light">Created by Sebastian Contreras - 2020</p>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default App;
