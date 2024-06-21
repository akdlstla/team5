"use strict";
document.addEventListener('DOMContentLoaded', (event) => {
    const idInput = document.getElementById('id');
    const pwInput = document.getElementById('pw');
    const keepCheckbox = document.getElementById('keep');
    const loginButton = document.getElementById('login_btn');

    // localStorage에서 아이디를 가져와서 입력 필드에 채우기
    const savedId = localStorage.getItem('savedId');
    if (savedId) {
        idInput.value = savedId;
        keepCheckbox.checked = true; // 체크박스도 체크 상태로 설정
    }

    loginButton.addEventListener('click', () => {
        const id = idInput.value;
        const pw = pwInput.value;
        const keepLoggedIn = keepCheckbox.checked;

        if (id && pw) {
            // 로그인 상태 유지 체크박스가 체크되어 있으면 아이디를 localStorage에 저장
            if (keepLoggedIn) {
                localStorage.setItem('savedId', id);
            } else {
                localStorage.removeItem('savedId');
            }

            // 로그인 처리 (예: 서버로 아이디와 비밀번호 전송)
            console.log('로그인 시도:', id, pw);

            // 실제 로그인 처리는 서버와의 통신이 필요함
            // 예: fetch('/login', { method: 'POST', body: JSON.stringify({ id, pw }) })
        } else {
            alert('아이디와 비밀번호를 입력하세요.');
        }
    });
});
