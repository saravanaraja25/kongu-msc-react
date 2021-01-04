import React from 'react';
import {Switch,Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function Body() {
    return (
        <div className="main-body">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
        </div>        
    )
}

export default Body
