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
        <p className="main_text" data-split="Click to start Miniter" 
        onClick={this.goToLogin.bind(this)}>Click to start Miniter</p>
      </div>
    );
  }
}

export default Main;