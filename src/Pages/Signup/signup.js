import React from 'react';
import './signup.css';


class SignUp extends React.Component {
    render(){
        return (
            <div className="signup_page">
                <h1>Sign up to Miniter</h1>
                <input id="id" type="text" placeholder="Enter ID" />
                <input id="name" type="text" placeholder="Enter Name" />
                <input id="pw" type="password" placeholder="Password" />
                <input id="repw" type="password" placeholder="Check Password" />
                <button id="signBtn">Sign up</button>
            </div>
        )
    }
}

export default SignUp;