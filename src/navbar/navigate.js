import React, { Component} from 'react';

import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import Home from '../pages/home/home';
import Profile from '../pages/profile/profile';
import Game from '../pages/game/game';
import Book from '../pages/book/book';
import Film from '../pages/film/film';

class Navigate extends Component{
    
    render(){
        const { history } = this.props;
        return(
          <Switch>
            <Route history={history} path='/home' component={Home} />
            <Route history={history} path='/profile' component={Profile} />
            <Route history={history} path='/game' component={Game} />
            <Route history={history} path='/book' component={Book} />
            <Route history={history} path='/film' component={Film} />
            <Redirect from='/' to='/home' />
          </Switch>
        );
    }
}

export default withRouter(Navigate);