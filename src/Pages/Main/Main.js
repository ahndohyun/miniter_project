import React from 'react';
import {withRouter} from 'react-router-dom';
import './Main.css';

class Main extends React.Component {

  goToLogin(){
    this.props.history.push('/login');
  }

  render(){
    return (
      <div className="main_bg">
        <p className="main_text" data-split="Let's Start Miniter" 
        onClick={this.goToLogin.bind(this)}>Let's Start Miniter</p>
      </div>
    );
  }
}

export default Main;