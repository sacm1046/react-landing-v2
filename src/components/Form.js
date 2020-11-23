import React from 'react';

const Form = () => {
    return (
        <div className="container my-5" id="forms">
            <h1 className="text-center mb-5">Formulario</h1>
            <div className="row">
                <div className="col-12 col-lg-6 text-right d-none d-lg-flex align-items-center">
                    <div>
                        <h1>Contactanos</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet ducimus a commodi, vel ullam soluta dolor nisi minima sequi.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">

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

    )
}

export default Form;
