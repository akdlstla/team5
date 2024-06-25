// JavaScript 코드

    // 버튼 요소와 이미지 요소를 가져옴
    let detailButton = document.querySelector('#detail_button');
    let detailImage = document.querySelector('#detail_image');
    // 초기 상태 설정: 이미지 숨기기
    detailImage.style.display = 'none';

    // 버튼 클릭 이벤트 리스너 추가
    detailButton.addEventListener('click', function() {
        // 이미지 요소의 현재 display 상태를 확인하여 토글
        if (detailImage.style.display === 'none') {
            detailImage.style.display = 'block'; // 이미지 보이기
            detailButton.textContent = '상품상세 정보 접기'; // 버튼 텍스트 변경
        } else {
            detailImage.style.display = 'none'; // 이미지 숨기기
            detailButton.textContent = '상품상세 정보 보기'; // 버튼 텍스트 변경
        }
    });
