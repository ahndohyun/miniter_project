import App from './App';

let findBtn = document.querySelector('.login_btn');
let forPw = document.getElementById('pw');

console.log(forPw)
forPw.addEventListener('keypress', function() {
    let findId = document.getElementById('id').value;
    let findPw = document.querySelector('#pw').value;
    if(findId && findPw){
        findBtn.style.backgroundColor = '#5dc1f0';
        return ;
    }
});

findBtn.addEventListener('click', function(){
    let findId = document.getElementById('id').value;
    let findPw = document.querySelector('#pw').value;
    if(findId && findPw){
        alert('환영합니다!');
        return ;
    }
});
export default Event;