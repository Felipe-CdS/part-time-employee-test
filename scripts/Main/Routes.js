import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import ErrorPage from './Views/404page';
import LandingPage from './Views/LandingPage'

class Routes extends React.Component {
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </HashRouter>
        );  
    }
}

export default Routes;