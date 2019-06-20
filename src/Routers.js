import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './Pages/Login/App';
import signup from './Pages/Signup/signup';
import tweets from './Pages/Tweets/tweets';

class Routers extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={App} />
                    <Route path="/signup" component={signup} />
                    <Route path="/tweets" component={tweets} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;