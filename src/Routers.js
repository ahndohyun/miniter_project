import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './Pages/Login';
// import signup from './Pages/Signup';
import tweets from './Pages/Tweets';
import main from './Pages/Main';

class Routers extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={main} />
                    <Route path="/Login" component={login} />
                    {/* <Route path="/Signup" component={signup} /> */}
                    <Route path="/Tweets" component={tweets} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;