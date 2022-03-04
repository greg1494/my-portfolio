import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Nav from '../../components/Nav';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <a href="https://github.com/greg1494/my-portfolio"><img src="https://img.icons8.com/ios-filled/50/000000/globe--v2.png" alt="Greg Christiansen" class="icon" id="github"/></a>
                <Nav/>
            </div>
    
            
    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;