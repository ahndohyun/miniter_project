import React from 'react';
import './signup.css';


class SignUp extends React.Component {
    state = {
        sign_id: '',
        sign_name: '',
        sign_pw: '',
        sign_repw: ''
    }

    fillSignInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    clickSignup = (e) => {
        if(!this.state.sign_pw){
            alert('비밀번호를 입력해 주세요')
        }
        else if(!this.state.sign_repw){
            alert('비밀번호 확인을 입력해 주세요')
        }
        else if(this.state.sign_pw !== this.state.sign_repw){
            alert('비밀번호가 일치하지 않습니다.')
        }
        else if(this.state.sign_pw.length < 6){
            alert('비밀번호는 6자리 이상입니다.')
        }
        else{
            alert('환영합니다')
        }
    }

    render(){
        return (
            <div className="signup_page">
                <h1>Sign up to Miniter</h1>
                <input id="id" name="sign_id" type="text" placeholder="Enter ID" onChange={this.fillSignInput} value={this.state.sign_id} />
                <input id="name" name="sign_name" type="text" placeholder="Enter Name" onChange={this.fillSignInput} value={this.state.sign_name}/>
                <input id="pw" name="sign_pw" type="password" placeholder="Password" onChange={this.fillSignInput} value={this.state.sign_pw}/>
                <input id="repw" name="sign_repw" type="password" placeholder="Check Password" onChange={this.fillSignInput} value={this.state.sign_repw}/>
                <button className={this.state.sign_id.length >= 4 && this.state.sign_name.length >=4 && this.state.sign_pw.length >=4 && this.state.sign_repw.length >=4? "signup_btn" : "signup_btn_default"} onClick={this.clickSignup}>Sign up</button>
            </div>
        )
    }
}

export default SignUp;