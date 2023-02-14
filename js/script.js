// 이미지 및 리소스 로드 후 코드실행
window.onload = () => {
    // 코드 실행 작성
    let $htmlTag = document.querySelector('html');
    // 모바일 메뉴 버튼 처리
    // 1. 모바일 버튼을 찾아서 저장한다.
    let $mbBt = document.querySelector('.mb-bt');
    // 2. 모바일 메뉴를 찾아서 저장한다.
    let $mbNav = document.querySelector('.mb-nav');
    // 3. 로고를 찾아서 저장한다.
    let $logo = document.querySelector('.logo');
    // 4. 헤더를 찾아서 저장한다.
    let $header = document.querySelector('.header');
    // 5. gnb > li > a
    let $gnbA = document.querySelectorAll('.gnb > li > a');
    // 6. 모바일 버튼의 span 저장
    let $mbBtSpan = $mbBt.querySelectorAll('span');

    // 클릭 시 active 클래스를 추가
    $mbBt.addEventListener('click', () => {
        $htmlTag.classList.toggle('active');
        $mbBt.classList.toggle('active');
        $logo.classList.toggle('active-blue');
        $mbNav.classList.toggle('active');
        $mbBtSpan.forEach(item => {
            item.classList.add('active');
        });
    });

    // 화면 리사이징 처리
    window.addEventListener('resize', () => {
        // window 화면 안쪽 너비 체크
        let width = window.innerWidth;
        if (width > 1080) {
            $htmlTag.classList.remove('active');
            $mbBt.classList.remove('active');
            $mbNav.classList.remove('active');

            // 스크롤이 되었는지 안 되었는지에 따라 분리 처리
            let scT = window.document.documentElement.scrollTop;
            if (scT > 100) {
                $mbBtSpan.forEach(item => {
                    item.classList.add('active');
                });
            }
            else {
                $mbBtSpan.forEach(item => {
                    item.classList.remove('active');
                });
            }
            $logo.classList.remove('active-blue');
        }
    });

    // window 스크롤 처리
    window.addEventListener('scroll', () => {
        let scT = window.document.documentElement.scrollTop;
        // 조금이라도 스크롤을 했다면 처리한다.
        if (scT > 100) {
            $header.classList.add('active');
            $logo.classList.add('active');
            $gnbA.forEach(item => {
                item.classList.add('active');
            });
            $mbBtSpan.forEach(item => {
                item.classList.add('active');
            });
        }
        else {
            $header.classList.remove('active');
            $logo.classList.remove('active');
            $gnbA.forEach(item => {
                item.classList.remove('active');
            });
            $mbBtSpan.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // 화면 reload 시 처리
    let scT = window.document.documentElement.scrollTop;
    if (scT > 100) {
        $header.classList.add('active');
        $logo.classList.add('active');
        $gnbA.forEach(item => {
            item.classList.add('active');
        });
        $mbBtSpan.forEach(item => {
            item.classList.add('active');
        });
    }

    new Swiper('.swvisual');

};