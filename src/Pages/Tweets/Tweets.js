import React from 'react';
// import ReactDOM from 'react-dom';
import './Tweets.css';
import Clock from 'react-live-clock';
import List from '../../Components/List'


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
                        <div className="status_name">{this.props.location.state.detail}</div>
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
                      <List name={this.state.list} />
                    </div>
                </div>
            </div>
        )
    }
}
export default tweets;