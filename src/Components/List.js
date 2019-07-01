import React from 'react';
import Clock from 'react-live-clock';

function List(props) {
    return(
     <ol>
        { 
          props.name.map((tweet,index) => {  //리액트에서 포문을 돌릴 때는 리스트들의 키 값을 잡아줘야 하는데 index는 좋지 않은 방법...
            return (
              <li key={index}>
                <p className="list_title">
                  <Clock format={'YYYY 년 MM 월 DD 일 HH:mm:ss'}></Clock>
                </p>
                <p className="list_content">{tweet.text}</p>
              </li>
            );
          })
        }
      </ol>
    )
}

export default List;