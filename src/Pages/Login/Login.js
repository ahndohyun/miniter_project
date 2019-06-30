import React from 'react';
import './Login.css';
import '../Signup/Signup.css';

class Login extends React.Component {
  state = {
    id: '',
    pw: '',
    show: false,
    sign_id: '',
    sign_name: '',
    sign_pw: '',
    sign_repw: ''
  }
  
  fillInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  clickLoginBtn = (e) => {
    if(this.state.id && this.state.pw){
      alert('환영합니다')
      this.props.history.push('/Tweets');
    }
  }
  
  fillSignInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  clickSignup(){
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
        this.props.history.push('/Tweets')
    }
  }

  showModal = () => {
    this.setState({show : true});
  }
  hideModal = () => {
    this.setState({show : false});
  }

  render(){
    return (
      <div className="login_page">
        <h1 className="login_title">Login to Miniter</h1>
        <input id="id" className="login_input" type="text" placeholder="Enter ID" name="id" onChange={this.fillInput} value={this.state.id} />
        <input id="pw" className="login_input" type="password" placeholder="Password" name="pw" onChange={this.fillInput} value={this.state.pw} />
        <button className={this.state.id.length >= 4 && this.state.pw.length >=4 ? "login_btn" : "login_btn_default"} onClick={this.clickLoginBtn}>Login</button>
        <Modal show={this.state.show}>
          <div className="signup_page">
            <button className="modalClose_btn" onClick={this.hideModal}>X</button>
            <h1>Sign up to Miniter</h1>
            <input id="id" name="sign_id" type="text" placeholder="Enter ID" onChange={this.fillSignInput} value={this.state.sign_id} />
            <input id="name" name="sign_name" type="text" placeholder="Enter Name" onChange={this.fillSignInput} value={this.state.sign_name}/>
            <input id="pw" name="sign_pw" type="password" placeholder="Password" onChange={this.fillSignInput} value={this.state.sign_pw}/>
            <input id="repw" name="sign_repw" type="password" placeholder="Check Password" onChange={this.fillSignInput} value={this.state.sign_repw}/>
            <button className={this.state.sign_id.length >= 4 && this.state.sign_name.length >=4 && this.state.sign_pw.length >=4 && this.state.sign_repw.length >=4? "signup_btn" : "signup_btn_default"} onClick={this.clickSignup.bind(this)}>Sign up</button>
          </div>
        </Modal>
        <div className="login_link">
          <button onClick={this.showModal}>Sign up for Miniter</button>
        </div>
      </div>
    );
  }
}

const Modal = ({show, children}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        
      </section>
    </div>
  );
};

export default Login;
