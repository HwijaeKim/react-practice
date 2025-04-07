const loginInput = document.querySelector('.name input');
const btn = document.querySelector('.submit-button button');

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === "") {
        alert("이름을 입력하세요.");
    }
    else if(username.length > 15) {
        alert("너무 깁니다.");
    }
}

btn.addEventListener('click', onLoginBtnClick)