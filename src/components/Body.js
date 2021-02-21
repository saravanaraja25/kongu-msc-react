import React from 'react';
import {Switch,Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Whymsc from "./pages/Whymsc";
import gallery from "./pages/Gallery"

function Body() {
    return (
        <div className="main-body">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/whymsc" component={Whymsc} exact />
                <Route path="/gallery" component={gallery} exact />
            </Switch>
        </div>        
    )
}

export default Body
