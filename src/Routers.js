import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './Pages/Login/login';
import signup from './Pages/Signup/signup';
import tweets from './Pages/Tweets/tweets';
import main from './Pages/Main/main';

class Routers extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={main} />
                    <Route path="/login" component={login} />
                    <Route path="/signup" component={signup} />
                    <Route path="/tweets" component={tweets} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;