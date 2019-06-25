import React from 'react';
import ReactDOM from 'react-dom';
import './tweets.css';


class tweets extends React.Component {

    state = {
        list: [],
        text: ''
    }
    
    fillText = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    clickNote = (e) => {
        const listData = {text: this.state.text};
        const newList = [listData,...this.state.list];          // 아래 주석처럼 state에는 직접 푸쉬 불가  배열을 복사해서 사용해줘야 한다.  .... 앞이라 누를때마다 앞쪽에 생성
        this.setState({
            list: newList,
            text: ""
        })
        // this.state.list.push(listData)
    }

    render(){
        return (
            <div>
                <div className="leftside">
                    <div className="top"></div>
                    <div className="round"></div>
                    <div className="bottom">
                        <div className="status_name">User Name</div>
                        <div className="status_container">
                            <div>Tweets</div>
                            <div>Following</div>
                            <div id="color">Followers</div>
                            <div>8</div>
                            <div>55</div>
                            <div>106</div>
                        </div>
                    </div>
                </div>

                <div className="rightside">
                    <div className="note">
                        <textarea className="note_text" placeholder="What's happening?" name="text" value={this.state.text} onChange={this.fillText}></textarea>
                        <button className="note_btn" onClick={this.clickNote}>Tweet</button>
                    </div>
                    <div className="tweet_list">
                        <ol id="list">
                            {
                                this.state.list.map((tweet,index) => {  //리액트에서 포문을 돌릴 때는 리스트들의 키 값을 잡아줘야 하는데 index는 좋지 않은 방법...
                                    return (
                                        <li key={index}>
                                            <p className="list_title">User Name</p>
                                            <p className="list_content">{tweet.text}</p>
                                        </li>
                                    );
                                })
                            }

                            <li>
                                <p className="list_title">First Tweet!!</p>
                                <p className="list_content">Hi, I am Dohyeon An.. Nice to meet you~</p>
                            </li>
                            <li>
                                <p className="list_title">Second</p>
                                <p className="list_content">Asda Story is a massively multiplayer online role-playing game developed by MaxOn Soft Corp and is published by GamesCampus for the North American market, Play Media Group for the European market, OnGame for the Brazilian market, nDoo</p>
                            </li>
                            <li>
                                <p className="list_title">제목</p>
                                <p className="list_content">내용</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default tweets;