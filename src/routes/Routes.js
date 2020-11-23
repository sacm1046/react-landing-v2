import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbars/Navbar';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';

const Routes = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
        </BrowserRouter>

    )
}

export default Routes;