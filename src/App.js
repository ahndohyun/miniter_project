import React from 'react';
import './style/App.css';
// import Event from './Event';
// import logo from './logo.svg';
// import Login from './Login';

function App() {
    // <div className="App"> 
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <Button  text="취소" />
    //     <Button text="취소"  color="yellow" />
    //     <Button text="확인" />
    //     <Button />
    //     <Button />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    let login = (
      <div className="login_page">
        <h1 className="login_title">Login to Miniter</h1>
        <input id="id" className="login_input" type="text" placeholder="Enter ID" />
        <input id="pw" className="login_input" type="password" placeholder="Password" />
        <button className="login_btn">Login</button>
        <div className="login_link">
          <a href="">Forgot password?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="signup.html">Sign up for Miniter</a>
        </div>
      </div>
    );
    return login;
      // ReactDOM.render(login, document.getElementById('main'));
}

export default App;
