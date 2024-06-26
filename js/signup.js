const form = document.querySelector('.signup_form');
const idBtn = document.querySelector('.id_check_btn');
const idIn = document.querySelector('.signup_id');
const pwIn = document.querySelector('.signup_pw_in');
const nameIn = document.querySelector('.signup_name');
const dateIn = document.querySelector('.signup_date');
const rePwIn = document.querySelector('.signup_re_pw_in');
const emailIn = document.querySelector('.signup_email');
const emailIIn = document.querySelector('.signup_email_input');
const emailSIn = document.querySelector('.signup_email_select');
const signup_btn = document.querySelector('.signup_btn');
let id_value = false;
let pw_value = false;
let emailvalue = '';

signup_btn.addEventListener('click', (event) => {
    const idVal = idIn.value.trim();
    const pwVal = pwIn.value.trim();
    const rePwVal = rePwIn.value.trim();
    const nameVal = nameIn.value.trim();
    const dateVal = dateIn.value.trim();
    const logInVal = false;

    if (
        emailvalue !== '사용불가' && 
        id_value === true && 
        pw_value === true &&
        idVal !== '' && idVal !== null &&
        pwVal !== '' && pwVal !== null &&
        nameVal !== '' && nameVal !== null &&
        dateVal !== '' && dateVal !== null &&
        rePwVal === pwVal
    ) {
        const user = {
            name: nameVal,
            id: idVal,
            pw: pwVal,
            date: dateVal,
            email: emailvalue,
            logIn: logInVal,
            keep: false,
        };
        console.log(user);
        const userObj = JSON.stringify(user);
        const length = window.localStorage.length;
        window.localStorage.setItem(`user${length}`, userObj);
        alert('회원가입 성공하셨습니다!');
        window.location.href = './login.html';
    } else {
        alert('모든 필드를 올바르게 입력해주세요.');
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
});

emailIn.addEventListener('input', handleEmailValidation);
emailIIn.addEventListener('input', handleEmailValidation);
emailSIn.addEventListener('change', handleEmailValidation);

function handleEmailValidation(event) {
    console.log(event)
    const emailVal = emailIn.value;
    const emailIVal = emailIIn.value;
    const emailSVal = emailSIn.value;
    const emailMessage = document.querySelector('.email_message');


    // 하나의 입력이 발생할 때 다른 입력을 초기화
    if (event.target === emailIIn) {
        emailSIn.value = '';
    } else if (event.target === emailSIn) {
        emailIIn.value = '';
    }

    if (emailVal.length < 7) {
        emailvalue = '7자 이상 적어주세요';
        emailMessage.textContent=emailvalue;
    } else {
        if (emailIVal.includes('gmail.com') || emailIVal.includes('daum.net') || emailIVal.includes('naver.com') || emailIVal.includes('nate.com')) {
            emailvalue = `${emailVal}@${emailIVal}`;
            emailMessage.textContent='이메일이 잘 입력됐습니다.';
            emailMessage.style.color='green'
        } else if (emailSVal.includes('gmail.com') || emailSVal.includes('daum.net') || emailSVal.includes('naver.com') || emailSVal.includes('nate.com')) {
            emailvalue = `${emailVal}@${emailSVal}`;
            emailMessage.textContent='이메일이 잘 입력됐습니다.';
            emailMessage.style.color='green'
        } else {
            emailvalue = '이메일을 입력 또는 선택해주세요';
            emailMessage.textContent = emailvalue;
        }
    }
    console.log(emailvalue);
}

idBtn.addEventListener('click', (event) => {
    const idVal = idIn.value;
    const idMessage = document.querySelector('.id_message');
    
    if (isValidId(idVal)) {
        alert('사용 가능한 아이디입니다.');
        idMessage.textContent = '사용 가능한 아이디입니다.';
        idMessage.style.color = 'green';
        id_value = true;
    } else {
        idMessage.style.color = 'red';
        id_value = false;
    }

    function isValidId(id) {
        if (id.length < 7 || id.length > 20) {
            alert('아이디가 짧거나 길이가 깁니다(6~20).');
            idMessage.textContent = '사용할 수 없는 아이디입니다.';
            return false;
        } else if (isDuplicateId(id)) {
            alert('이미 존재하는 아이디입니다.');
            idMessage.textContent = '이미 존재하는 아이디입니다.';
            return false;
        } else {
            return true;
        }
    }
});

pwIn.addEventListener('input', () => {
    const pwInVal = pwIn.value;
    const pwMessage = document.querySelector('.pw_message');

    if (isValidPassword(pwInVal)) {
        pwMessage.textContent = '사용 가능한 비밀번호입니다.';
        pwMessage.style.color = 'green';
        pw_value = true;
    } else {
        pwMessage.textContent = '조건에 충족하지 않는 비밀번호입니다.';
        pwMessage.style.color = 'red';
        pw_value = false;
    }

    function isValidPassword(password) {
        if (password.length < 8 || password.length > 20) {
            return false;
        }

        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return hasLetter && hasNumber && hasSpecialChar;
    }
});

rePwIn.addEventListener('input', () => {
    const rePwVal = rePwIn.value;
    const rePwMessage = document.querySelector('.repw_message');
    const pwInVal = pwIn.value;

    if (isValidPassword(rePwVal, pwInVal)) {
        rePwMessage.textContent = '비밀번호가 일치합니다.';
        rePwMessage.style.color = 'green';
    } else {
        rePwMessage.textContent = '비밀번호가 일치하지 않습니다.';
        rePwMessage.style.color = 'red';
    }

    function isValidPassword(password) {
        return rePwVal === pwInVal;
    }
});

function getUsersFromLocalStorage() {
    let users = [];
    const keys = Object.keys(window.localStorage);
    keys.forEach(key => {
        if (key.startsWith('user')) {
            users.push(JSON.parse(window.localStorage.getItem(key)));
        }
    });
    return users;
}

function isDuplicateId(userId) {
    const users = getUsersFromLocalStorage();
    return users.some(user => user.id === userId);
}
