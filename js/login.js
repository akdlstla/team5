const idIn = document.querySelector('.id_input');
const pwIn = document.querySelector('.pw_input');
const keep = document.querySelector('.keep');
const loginBtn = document.querySelector('.login_btn');

window.addEventListener('load', () => {
    const length = window.localStorage.length;
    for (let i = 0; i < length; i++) {
        const key = `user${i}`;
        const userData = JSON.parse(window.localStorage.getItem(key));
        if (userData.keep) {
            // 로그인 상태가 유지되어야 할 경우 id와 pw를 입력란에 표시
            idIn.value = userData.id;
            pwIn.value = userData.pw;
            // keep.checked 상태에 따라 스타일 적용
            if (userData.keep) {
                keep.value = 'on';
                // document.querySelector('.keep_check .keep_text').style.color = '#333';
                updateKeepState(false);
            } else {
                keep.value = 'off';
                // document.querySelector('.keep_check .keep_text').style.color = '#777';
                updateKeepState(false);
            }
            return;
        }
    }
});


// 로그인 버튼 클릭 시 실행되는 코드
loginBtn.addEventListener('click', () => {
    const idVal = idIn.value;
    const pwVal = pwIn.value;

    const length = window.localStorage.length;
    for (let i = 0; i < length; i++) {
        const key = `user${i}`;
        const userData = JSON.parse(window.localStorage.getItem(key));
        if (userData.id === idVal) {
            if (userData.pw === pwVal) {
                alert('로그인 성공!');
                userData.logIn = true; // 로그인 상태를 true로 변경
                window.localStorage.setItem(key, JSON.stringify(userData));
                window.location.href = './index.html'; // index 페이지로 이동
                return;
            } else {
                alert('비밀번호가 일치하지 않습니다.');
                return;
            }
        }
    }

    alert('존재하지 않는 아이디입니다.');
});

// 체크박스 클릭 시 실행되는 코드
keep.addEventListener('click', () => {
    if (keep.checked) {
        keep.value = "on";
        document.querySelector('.keep_check .keep_text').style.color = '#333';
        updateKeepState(true); // keep 상태를 true로 업데이트
    } else {
        keep.value = "off";
        document.querySelector('.keep_check .keep_text').style.color = '#777';
        updateKeepState(false); // keep 상태를 false로 업데이트
    }
});

// 로그인 상태 업데이트 함수
function updateKeepState(newState) {
    const length = window.localStorage.length;
    for (let i = 0; i < length; i++) {
        const key = `user${i}`;
        const userData = JSON.parse(window.localStorage.getItem(key));
        if (userData.id === idIn.value) {
            userData.keep = newState; // newState 값에 따라 로그인 상태를 설정
            window.localStorage.setItem(key, JSON.stringify(userData));
            break;
        }
    }
}
