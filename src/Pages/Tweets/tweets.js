import React from 'react';
import './tweets.css';


class tweets extends React.Component {
    render(){
        return (
            <div>
                <div class="leftside">
                    <div class="top"></div>
                    <div class="round"></div>
                    <div class="bottom">
                        <div class="status_name">User Name</div>
                        <div class="status_container">
                            <div>Tweets</div>
                            <div>Following</div>
                            <div id="color">Followers</div>
                            <div>8</div>
                            <div>55</div>
                            <div>106</div>
                        </div>
                    </div>
                </div>

                <div class="rightside">
                    <div class="note">
                        <textarea class="note_text" placeholder="What's happening?"></textarea>
                        <button class="note_btn">Tweet</button>
                    </div>
                    <div class="tweet_list">
                        <ol id="list">
                            <li>
                                <p class="list_title">First Tweet!!</p>
                                <p class="list_content">Hi, I am Dohyeon An.. Nice to meet you~</p>
                            </li>
                            <li>
                                <p class="list_title">Second</p>
                                <p class="list_content">Asda Story is a massively multiplayer online role-playing game developed by MaxOn Soft Corp and is published by GamesCampus for the North American market, Play Media Group for the European market, OnGame for the Brazilian market, nDoo</p>
                            </li>
                            <li>
                                <p class="list_title">제목</p>
                                <p class="list_content">내용</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default tweets;