import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import Home from '../pages/home';
import DlaDomu from '../pages/dladomu';
import Kontakt from '../pages/kontakt';
import Onas from '../pages/onas';
import Projektowanie from '../pages/projektowanie';
import Realizacje from '../pages/realizacje';
import Refabrykacja from '../pages/refabrykacja';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dla-domu" component={DlaDomu} />
                    <Route exact path="/kontakt" component={Kontakt} />
                    <Route exact path="/o-nas" component={Onas} />
                    <Route exact path="/projektowanie" component={Projektowanie} />
                    <Route exact path="/realizacje" component={Realizacje} />
                    <Route exact path="/refabrykacja" component={Refabrykacja} />
                </Switch>
            </Router>
        )
    }
}

export default App;