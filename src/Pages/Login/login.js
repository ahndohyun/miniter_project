import React from 'react';
import './login.css';

class Login extends React.Component {
  state = {
    id: '',
    pw: ''
  }
  
  fillInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  clickLoginBtn = (e) => {
    if(this.state.id && this.state.pw){
      alert('환영합니다')
    }
  }

  render(){
    let bgColor = this.state.color_black ? "black" : "white";
    return (
      <div className="login_page">
        <h1 className="login_title">Login to Miniter</h1>
        <input id="id" className="login_input" type="text" placeholder="Enter ID" name="id" onChange={this.fillInput} value={this.state.id} />
        <input id="pw" className="login_input" type="password" placeholder="Password" name="pw" onChange={this.fillInput} value={this.state.pw} />
        <button className={this.state.id.length >= 4 && this.state.pw.length >=4 ? "login_btn" : "login_btn_default"} onClick={this.clickLoginBtn}>Login</button>
        <div className="login_link">
          <a href="">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/signup">Sign up for Miniter</a>
        </div>
      </div>
    );
  }
}
export default Login;
