import React from 'react';
import './main.css';

class Main extends React.Component {
  render(){
    return (
      <div>
        <a href="/login">Miniter 로그인</a>
	      <a href="./signup">Miniter 회원가입</a>
	      <a href="./tweets">tweet 보기</a>
      </div>
    );
  }
}

export default Main;