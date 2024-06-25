let mybutton = document.getElementById("button");
const productNames = document.querySelectorAll('.name');
const none = document.querySelectorAll('.login_none');
const logOutBtn = document.getElementById('logOut');

logOutBtn.addEventListener('click', () => {
    const length = window.localStorage.length;

    // 저장된 모든 사용자 정보를 순회하며 로그인 상태인지 확인하고 로그아웃 처리
    for (let i = 0; i < length; i++) {
        const key = `user${i}`;
        const userData = JSON.parse(window.localStorage.getItem(key));

        // 로그인 상태인 경우
        if (userData.logIn === true) {
            alert(`${userData.name}님 로그아웃 되었습니다.`);
            userData.logIn = false; // 로그인 상태를 false로 변경
            window.localStorage.setItem(key, JSON.stringify(userData));
            break; // 한 번에 하나의 사용자만 로그아웃할 것이므로 break
        }
    }

    // 예시: 로그아웃 후 다시 로그인 페이지로 이동
    window.location.href = './index.html'; // 로그인 페이지로 리다이렉트
});





window.addEventListener('load',()=>{
    const length = window.localStorage.length;
    for (let i = 0; i < length; i++) {
        const key = `user${i}`;
        const userData = JSON.parse(window.localStorage.getItem(key));
        const userNmae =document.querySelector('#userName');
        const signup = document.querySelector('#signUp');
        if (userData.logIn === true) {
            none.forEach(none=>{
                none.style.display='flex';
            })
            userNmae.textContent=`${userData.name} 님`
            signup.style.display='none';
            return;
        } else {
            none.forEach(none=>{
                none.style.display='none';
                signup.style.display='flex';
            })
            return;
        }
    }
});


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = "0";
        mybutton.style.visibility = "hidden";
    }
}
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


truncateProductNames = () =>{
    productNames.forEach(productName=>{
        const productNameVal = productName.textContent.split('');

        if(productNameVal.length>25){
            productName.textContent = productNameVal.slice(0,20).join('')+' ...';
        }

    });
}
truncateProductNames();
scrollFunction();